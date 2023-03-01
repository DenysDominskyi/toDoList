import Task from './Task'

const TasksField = ({tasks, remove, showModal}) => {

    return (
        <div className='tasksField'>
            <div className='headlines'>
                <h4>id</h4>
                <h4>Title</h4>
                <h4>Description</h4>
                <h4>Status</h4>
            </div>
            <div className='tasks'>
                {
                    tasks.map((task, index) => (
                        < Task
                            task={task}
                            id={index + 1}
                            remove={remove}
                            showModal={showModal}
                            key={index}
                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export default TasksField
