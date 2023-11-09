/* eslint-disable react/prop-types */

// TodoItem.jsx
import { TrashIcon } from "@heroicons/react/24/solid";

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li key={id}>
            <label>
                <input 
                  type='checkbox' 
                  checked={completed}
                  onChange={e => toggleTodo(id, e.target.checked)} 
                />
                {title}
            </label>
            <button 
                onClick={() => deleteTodo(id)}
                className='delete-task-btn' 
                aria-label='Delete Task'><TrashIcon/> 
            </button>
        </li>
    )

}

export default TodoItem;