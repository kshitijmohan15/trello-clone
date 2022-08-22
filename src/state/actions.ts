// type declaration
export type Action =
    |
    {
        type: 'ADD_LIST'
        payload: string
    }
    |
    {
        type: "ADD_TASK"
        payload: {text:string; listId:string}
    }

    // this method is called discriminated union. the "type" property will be the discriminant between the two optional types that we have given to Action. if the type of the object is ADD_LIST then the type of payload will be string and vice versa. Now we will work on creating action creators.

export const addTask = (
    text:string, 
    listId:string
    ): Action => ({
    type: 'ADD_TASK',
    payload: {
        text, 
        listId
    }
})

export const addList = (
    text: string,
): Action => {
    return {
    type: "ADD_LIST",
    payload: text
    }
}
