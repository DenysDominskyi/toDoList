import React, { useState } from 'react'

const Form = ({create}) => {

    const [task, setTask] = useState(
        {
            title: '',
            description: '',
        }
    )
    
    const [titleError, setTitleError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)
    const hendleSubmit = (e) => {
        e.preventDefault()
        if (!task.title || !task.description) {
            if (!task.title) setTitleError(true)
            if (!task.description) setDescriptionError(true)
            return alert('Some field is empty')
        }
        setTitleError(false)
        setDescriptionError(false)

        const newTask = {
            id: Date.now(),
            title: task.title,
            description: task.description,
        }
        create(newTask)
        setTask({ title: '', description: '' })
    }
    
    const handleTitleChange = (e) => {
        setTask({...task, title: e.target.value})
        setTitleError(false)
    }

    const handleDescriptionChange = (e) => {
        setTask({...task, description: e.target.value})
        setDescriptionError(false)
    }

    return (
        <form className="form">
            <div className="inputBox">
                <span>Title</span>
                <input
                    className={titleError ? 'error' : ''}
                    type="text"
                    placeholder="Enter title"
                    required
                    value={task.title}
                    onChange={(e) => handleTitleChange(e)}
                />
            </div>
            <div className="inputBox">
                <span>Description</span>
                <input
                    className={descriptionError ? 'error' : ''}
                    type="text"
                    placeholder="Enter description"
                    required
                    value={task.description}
                    onChange={(e) => handleDescriptionChange(e)}
                />
            </div>
            
            <button style={{ cursor: "pointer", padding: 5 + 'px' }} onClick={(e) => hendleSubmit(e)}>
            Create
            </button>
        </form>
    )
}

export default Form
