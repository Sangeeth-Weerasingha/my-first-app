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

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8', display: 'flex', justifyContent: 'center', paddingTop: '50px', fontFamily: 'Arial' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '15px', width: '400px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#1e293b' }}>My First App 🚀</h1>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)}
            placeholder="Mokak hari type karanna..."
            style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
            onKeyDown={e => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask} style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Add</button>
        </div>

        <div>
          {tasks.map((t,i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', background: '#f8fafc', padding: '10px', borderRadius: '8px', marginBottom: '8px', alignItems: 'center' }}>
              <span>{t}</span>
              <button onClick={() => deleteTask(i)} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>X</button>
            </div>
          ))}
        </div>

        {tasks.length === 0 && <p style={{ textAlign: 'center', color: '#999' }}>Task na - aluth ekak add karanna!</p>}
      </div>
    </div>
  )
}

export default App
