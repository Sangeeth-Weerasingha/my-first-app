import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

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
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Day 3 - My Todo App 📝</h1>
      <p>Hello Pasindu! Day 3 - Job eka ganna app eka!</p>

      <div style={{ margin: '30px' }}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Task ekak type karanna..."
          style={{ padding: '12px', fontSize: '16px', width: '250px' }}
        />
        <button 
          onClick={addTask}
          style={{ padding: '12px 20px', marginLeft: '10px', background: 'black', color: 'white', cursor: 'pointer' }}
        >
          Add Task
        </button>
      </div>

      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        {tasks.map((task, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', background: '#222', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>X</button>
          </div>
        ))}
      </div>

      <p style={{ marginTop: '20px' }}>Tasks: {tasks.length}</p>
    </div>
  )
}

export default App