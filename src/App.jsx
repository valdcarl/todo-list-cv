import { useState } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import "./styles.css";

function App() {
  //states
  const [newTask, setNewTask] = useState("");   // for todo input field
  const [todos, setTodos] = useState([]);       // to create the array of todos

  // submitting todos to our list
  function handleSubmit(e) {
    /** handles when a new todo is submitted from out form input 
     *  we want our app to rerender with this change to take effect
    */
    // prevent the
    e.preventDefault();

    // I know I cant modify todos, so I'm using the spread operator to get a new array
    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title: newTask, completed: false },
      ]
    })

    setNewTask("");   // so that the new todo is cleared after submission
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
      <h1 className='app-header'>
        TODO LIST
      </h1>
      <form onSubmit={handleSubmit} className='new-task-form'> 
        <div className='form-row'>
          <div className='form-input-element'>
            <label htmlFor='task'></label>
            <input 
              value={newTask} 
              onChange={e => setNewTask(e.target.value)}
              type='text' 
              id='task' 
              placeholder="Enter Task Here"/>
            <button className='add-task-btn' aria-label='Add Task' type='submit'><PlusIcon/> </button>
          </div>
        </div>
      </form>

      <ul className='todo-list-section'>
        {todos.length === 0 && "Nothing For Now!"}
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
