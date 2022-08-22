import React, {FC} from 'react';
import AddNewItem  from "./AddNewItem"
import {CardContainer, ColumnContainer, ColumnTitle } from './styles';
import Card from './Card';
import {useAppState} from './state/AppStateContext'
import {addTask} from './state/actions'

type ColumnProps = {
    text: string,
    id: string
}

const Column = ({text, id}: ColumnProps) => {

    const {getTasksByListId, dispatch, lists} = useAppState()
    const tasks = getTasksByListId(id)
    return ( 
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id} />
            ))}
            <AddNewItem toggleButtonText='+ Add new task' onAdd={(text)=>dispatch(addTask(text, id))} dark />
            <button onClick={() => console.log(lists)}>Get the og lists</button>
        </ColumnContainer>
    )
}

export default Column;