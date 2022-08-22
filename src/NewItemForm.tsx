import React, {useState} from 'react'
import { NewItemFormContainer, NewItemInput, NewItemButton } from './styles'
import {useFocus} from './utils/useFocus'

type NewItemFormProps = {
    onAdd(text: string): void 
}

const NewItemForm = ({onAdd}: NewItemFormProps) => {

  const [text, setText] = useState("")
  const inputRef = useFocus()

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter"){
      onAdd(text)
    }
  }

  return (
    <NewItemFormContainer>
        <NewItemInput onChange={e=>setText(e.target.value)} ref={inputRef} onKeyPress={handleAddText}/>
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>

    </NewItemFormContainer>
  )
}

export default NewItemForm