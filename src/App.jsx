import { useState } from 'react';
import "./styles.css";

import TodoHeader from './components/TodoHeader';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  // for toggling completion of a todo
  function toggleTodo(id, completed) {
    /** takes id and if that id is checked to be marked as completed */
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {

          // creating a NEW TODO, with a changed property ON IT
          // the onChange is being called when this being changed, and the approp id for the correct
          // todo is being toggled
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  // deleting a todo from out list
  function deleteTodo(id) {
    /** deletes a todo based on that todo's id onClick*/
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className='container'>
      <TodoHeader/>
      <TodoForm onSubmitAddTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
