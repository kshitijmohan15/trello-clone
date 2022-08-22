import React, {createContext, useContext, FC, Dispatch} from 'react';
import {appStateReducer, AppState, List, Task} from './appStateReducer';
import { useImmerReducer } from "use-immer"
import { Action } from './actions';

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

type AppStateProviderProps = {
    children: React.ReactNode
}

export const AppStateProvider: FC<AppStateProviderProps> = ({children}) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    // here the appData is the initialState
    const {lists} = state;
    const getTasksByListId = (id: string) => {
        return lists.find((list)=>list.id===id)?.tasks || []}

    return(
        <AppStateContext.Provider value={{lists, getTasksByListId, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string):Task[]
    dispatch: Dispatch<Action>
}

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
}

export const useAppState = () => {
    return useContext(AppStateContext)
}