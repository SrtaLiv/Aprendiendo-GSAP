import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Projects from './Project'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App