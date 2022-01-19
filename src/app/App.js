import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../context';
import '../styles/App.css';


// const defaultTodos = [
//   {text:"Workout", completed: true, id:1},
//   {text:"Study React", completed: true, id:2},
//   {text:"Draw a cool character", completed: false, id:3},
// ] 




function App() {

  //Create a UI component to receive all the child components.
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export { App };
