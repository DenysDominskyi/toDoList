import React, { useState } from 'react'

const Task = ({ task, id, remove, showModal }) => {

const [isChecked, setIsChecked] = useState(false);

function handleChange(event) {
    setIsChecked(event.target.checked);
  }

    return (
        <div className='task' onClick={() => showModal(task)}>
            <p>{id}</p>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <div onClick={(e) => e.stopPropagation()}>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <button onClick={() => remove(task)} style={{marginLeft: 10 + 'px'}}>Del</button>
            </div>
        </div>
    )
}

export default Task
