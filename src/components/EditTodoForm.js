import React, { useState } from 'react'

export const EditTodoForm = ({task, editTodo}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input'
            placeholder='Edit task' onChange={(e) => setValue(e.target.value)}
            value={value}/>
            <button type='submit' className='todo-btn'>Update</button>
        </form>
    )
}
