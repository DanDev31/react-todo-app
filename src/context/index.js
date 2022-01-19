import React, { useState ,createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {

    //useState hook to update the state 
  const {

    item: todos, 
    saveItem: saveTodos,
    loading,
    error

  } = useLocalStorage('TODOS_V1', []);

  const [ searchValue, setSearchValue ] = useState('');
  const [ openModal, setOpenModal ] = useState(false);

  //Filter the length of the todos array to set the number of the completed todos
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

 //Filter the todos by searching 
 let searchedTodos = []

 if ( !searchValue.length >= 1 ){
    searchedTodos = todos
 } else {
    searchedTodos= todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
 }

 //Function to add new TODOS
 const addTodo = ( text ) =>{
  const newTodos = [...todos];
  newTodos.push({
    completed: false,
    text,
  })
  saveTodos(newTodos);
}

 //Function to complete Todos, using findIndex to search the index of a specific todo item

 const completeTodo = ( text ) =>{
   const todoIndex = todos.findIndex( todo => todo.text === text );
   const newTodos = [...todos];
   newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
   saveTodos(newTodos);
 }


 //Function to delete todos

 const deleteTodo = ( text ) =>{
  const todoIndex = todos.findIndex( todo => todo.text === text );
  const newTodos = [...todos];
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
}


    return (
        <TodoContext.Provider value = {{
            
      completedTodos, 
      totalTodos,
      searchValue, 
      setSearchValue, 
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      loading ,
      error,
      openModal, 
      setOpenModal,

        }}>
            { props.children }

        </TodoContext.Provider>
    )
};

export { TodoContext, TodoProvider }
