import React from 'react'
import '../styles/TodoItem.css'


function TodoItem({ text, completed, onComplete, onDelete }) {


    return (
        <li className = "todo-item" >

            <p className = { `${completed && "todo-completed-text"}` }>{ text }</p>

            <div className = "todo-item-icons" >

                <span 
                className = { `${completed && "todo-completed"}` }
                onClick = { onComplete }
                >
                    <i className = "fas fa-check" ></i>

                </span>

                <span 
                className = "todo-deleted"
                onClick = { onDelete }
                >
                    <i className = "fas fa-trash-alt" ></i>

                </span>

            </div>

        </li>
    )
}

export { TodoItem }
