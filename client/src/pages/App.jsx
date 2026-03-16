import { Route, Routes } from "react-router"
import '../styles/App.css'
import HomePage from "./HomePage"
import AddLauncherPage from "./AddLauncherPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addLauncher" element={<AddLauncherPage />} />
    </Routes>
  )
}

export default App
