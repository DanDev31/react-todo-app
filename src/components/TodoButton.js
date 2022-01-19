import React from 'react'
import '../styles/TodoButton.css'

function TodoButton({ setOpenModal }) {

    const onclickButton = () => {
        setOpenModal(prevState => !prevState)
    }



    return (
        <button 
        className="todo-button"
        onClick={onclickButton}
        >
            <span>+</span>
            
        </button>
    )
}

export { TodoButton }
