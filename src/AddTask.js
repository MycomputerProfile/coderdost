import React, { useState } from 'react'

const AddTask = () => {
    const [input, setInput] = useState("")
    return (
        <>
            <input
                type="text"
                placeholder='Add Task'
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                }}
            /><button
                onClick={() => { AddTask(input) }}
            >Add</button>
        </>
    )
}

export default AddTask