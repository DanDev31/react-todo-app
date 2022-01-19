import React, { useContext } from 'react'
import { TodoContext } from '../context';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/TodoForm';
import { TodoButton } from '../components/TodoButton';
import { Modal } from '../modal/Modal';


function AppUI() {

    const {
        
        searchedTodos,
        completeTodo,
        deleteTodo ,
        loading ,
        error,
        openModal,
        setOpenModal,

    } = useContext(TodoContext)


    const fontStyle = {
        fontSize: "24px",
        fontWeigth: "700",
    }

    return (
        <div className="container">

            <TodoCounter/>
            <TodoSearch/>

  
            <TodoList>
            {loading && <p style={fontStyle}>Cargando...</p>}
            {error && <p style={fontStyle}>Ups! Hubo un error</p>}
            {(!loading && !searchedTodos.length) && <p style={fontStyle}>Crea un nuevo TODO!</p>}
            {searchedTodos.map(todo => (
                
                <TodoItem
                key = { todo.id }
                text = { todo.text }
                completed = { todo.completed }
                onComplete = { () => completeTodo(todo.text) }
                onDelete = { () => deleteTodo(todo.text) }
                />
                
            ))}
            </TodoList>
            
            {openModal && (
                <Modal>
                <TodoForm />
            </Modal> 
            )}
                
            <TodoButton
                setOpenModal = { setOpenModal }
            />
            
      </div>
    )
}

export { AppUI };
