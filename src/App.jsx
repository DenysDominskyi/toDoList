import TasksField from "./components/TasksField"
import React, { useState } from 'react'
import Form from "./components/Form"
import Modal from "./components/Modal"

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'first task',
      description: 'Lorem ipsum dolor  et dolore magna ullamco laboris nisi ut aliquip ex eaat. Duis aut mollit anim id est laborum.',
      status: false,
    },
    {
      id: 2,
      title: 'second task',
      description: 'labore et dolore magna alin ullamco laborisuium dolore eu fugiat nulla pariatur.',
      status: true,
    },
  ])

  const [modalVisible, setModalVisible] = useState(false)

  const [modalTask, setModalTask] = useState([])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (selectedTask) => {
    setTasks(tasks.filter(t => t.id !== selectedTask.id))
    setModalTask([])
  }

  const showModal = (dataTask) => {
    setModalVisible(true)
    setModalTask(...modalTask, dataTask)
  }

  const hideModal = () => {
    setModalVisible(false)
    setModalTask([])
  }

  return (
    <main>

      <Modal
        modalTask={modalTask}
        visible={modalVisible}
        hideModal={hideModal}
      />
      
      <Form create={createTask}/>

      <TasksField
        tasks={tasks}
        remove={removeTask}
        setTasks={setTasks}
        showModal={showModal}
      />

    </main>
  )
}

export default App
