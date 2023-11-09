/* eslint-disable react/prop-types */

// TodoList.jsx
// import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList ({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className='todo-list-section'>
        {todos.length === 0 && <em>Nothing for now! 💤</em>}
        {todos.map(todo => {
          return (
            <TodoItem
                id={todo.id} 
                completed={todo.completed} 
                title={todo.title} 
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
}

export default TodoList;