import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Projects from './Project'
import Example from './Example'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
