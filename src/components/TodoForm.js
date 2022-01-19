import React, { useContext, useState } from 'react'
import { TodoContext } from '../context'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo, setOpenModal } = useContext(TodoContext)

    const onChange = (e) =>{
        setNewTodoValue(e.target.value)
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit = { onSubmit }>
            <label></label>
            <textarea
            value = { newTodoValue }
            onChange={ onChange }
            placeholder='Añade un nuevo TODO'
            ></textarea>
            <div>
                <button
                type = 'button'
                onCancel = { onCancel }
                >
                    Cancelar
                </button>

                <button
                type = 'submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
