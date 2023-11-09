import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import "./styles.css";

import TodoHeader from './components/TodoHeader';
import TodoForm from './components/TodoForm';

function App() {
  //states
  const [todos, setTodos] = useState([]);       // to create the array of todos
  
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

      <ul className='todo-list-section'>
        {todos.length === 0 && <em>Nothing for now! 💤</em>}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input 
                  type='checkbox' 
                  checked={todo.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)} 
                />
                {todo.title}
              </label>
              <button 
                onClick={() => deleteTodo(todo.id)}
                className='delete-task-btn' 
                aria-label='Delete Task'><TrashIcon/> 
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
