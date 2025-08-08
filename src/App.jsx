import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <About />
      <Blog />
    </main>
  )
}

export default App
