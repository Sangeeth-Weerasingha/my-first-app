import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  // BACKEND EKEN DATA GANNAWA
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => {
        console.log("Backend eken awa:", data)
      })
  }, [])

  const addTask = () => {
    if(input.trim() === "") return
    setTasks([...tasks, input])
    setInput("")
  }

  return (
    <div>
      <h1>My First App</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      {tasks.map((t,i) => <p key={i}>{t}</p>)}
    </div>
  )
}

export default App