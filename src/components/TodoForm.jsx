// TodoForm.jsx
import { useState } from "react";
import { PlusIcon } from '@heroicons/react/24/solid';

// eslint-disable-next-line react/prop-types
function TodoForm ({ onSubmitAddTodo }) {
    const [newTask, setNewTask] = useState("");   // for todo input field

    function handleSubmit(e) {
        /** handles when a new todo is submitted from out form input 
         *  we want our app to rerender with this change to take effect
        */
        // prevent the default action from being taken from a form
        e.preventDefault();
        if (newTask === "") return
    
        onSubmitAddTodo(newTask);
    
        setNewTask("");   // so that the new todo is cleared after submission
      }

    return (
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
    )
}

export default TodoForm;