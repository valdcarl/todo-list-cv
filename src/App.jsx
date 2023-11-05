import { PlusIcon } from '@heroicons/react/24/solid';
import "./styles.css";

function App() {
  return (
    <div className='container'>
      <h1 className='app-header'>TODO LIST</h1>
      <form className='new-task-form'> 
        <div className='form-row'>
          <div className='form-input-element'>
            <label htmlFor='task'></label>
            <input type='text' id='task' placeholder="Enter Task Here"/>
            <button className='add-task-btn' aria-label='Add Task' type='submit'><PlusIcon/>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
