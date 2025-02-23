import { useState } from 'react'
import Dashboard from './dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div>Hello</div> */}
    <Dashboard />
    </div>
  )
}

export default App
