import { Route, Routes } from "react-router"
import '../styles/App.css'
import HomePage from "./HomePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addLauncher" element={<HomePage />} />
    </Routes>
  )
}

export default App
