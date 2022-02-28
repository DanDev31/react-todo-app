import React, { useContext, useState } from 'react'
import { TodoContext } from '../context'

import '../styles/todoForm.css'

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
        <form 
        onSubmit = { onSubmit }
        className="modal__form"
        >
            <div className='modal__form-elements'>
                <label>Tu nuevo ToDo</label>
                <textarea
                value = { newTodoValue }
                onChange={ onChange }
                placeholder='Añade un nuevo TODO'
                className='modal__form-textarea'
                ></textarea>
                <div className='modal__form-buttons'>
                    <button
                    type = 'button'
                    onCancel = { onCancel }
                    className="modal__form-button"
                    >
                        Cancelar
                    </button>

                    <button
                    type = 'submit'
                    className="modal__form-button"
                    >
                        Añadir
                    </button>
                </div>
            </div>
            
        </form>
    )
}

export { TodoForm }
