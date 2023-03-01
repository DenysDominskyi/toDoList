import React from 'react'

const Modal = ({ modalTask, visible, hideModal }) => {
    
    const rootClasses = ['modal']
    if (visible) {
        rootClasses.push('active')
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => hideModal()}>
            <div className='modalContent' onClick={(e) => e.stopPropagation()}>
                <h1>{modalTask.title}</h1>
                <h3>Description:</h3>
                <p>{modalTask.description}</p>
                <div>
                    <h5>Status:</h5>
                    <input
                        type="checkbox"
                    />
                </div>
                <button onClick={() => hideModal()}>Close</button>
            </div>
        </div>
    )
}

export default Modal
