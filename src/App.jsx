import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  // BACKEND EKEN DATA GANNAWA - Meka thamai aluth de!
  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(res => res.json())
      .then(data => {
        console.log("Backend eken awa:", data)
        // Backend eken ena data tasks walata danna
        if(data.length > 0) {
          setTasks(data.map(t => t.text))
        }
      })
  }, [])

  const addTask = () => {
    if(input.trim() === "") return
    setTasks([...tasks, input])
    setInput("")
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Day 4 - My MERN App 🔥</h1>
      <p>Backend Connect kala!</p>
      
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="Task ekak danna"
      />
      <button onClick={addTask}>Add</button>

      <div style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <div key={index}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App