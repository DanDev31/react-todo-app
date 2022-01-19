import React, { useContext } from "react";
import { TodoContext } from "../context";
import '../styles/TodoCounter.css'

function TodoCounter(){

    const { completedTodos, totalTodos } = useContext(TodoContext)

    return(
        <React.Fragment>
            <h2 className="todoCounter-title">Has completado { completedTodos } de { totalTodos } tareas</h2>
        </React.Fragment>
    );
}

export { TodoCounter };