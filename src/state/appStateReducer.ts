import { Action } from "./actions";
import {nanoid} from 'nanoid'
import {findItemIndexById} from '../utils/arrayUtils'


export type Task = {
    id: string
    text: string
}
export type List = {
    id: string
    text: string
    tasks: Task[]
}
export type AppState = {
    lists: List[]
}

// earlier, we would have to spread the initialState into an object and then update the object, but now we can use immer reducer to just mutate the old list without having to spread it or return anything, it is as simple as a javascript push function.

export const appStateReducer = (draft:AppState, action:Action): AppState | void => {

    switch(action.type){
        case 'ADD_LIST': {
            draft.lists.push({id: nanoid(), text: action.payload, tasks:[]});
            break;
        }
        case 'ADD_TASK': {
            const {text,listId} = action.payload
            const targetListIndex = findItemIndexById(draft.lists, listId)
            draft.lists[targetListIndex].tasks.push({id: nanoid(),text})
            break;
        }
        default: {
            break
        }
    }

}
