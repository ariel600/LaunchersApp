import { Route, Routes } from "react-router"
import '../styles/App.css'
import HomePage from "./HomePage"
import AddLauncherPage from "./AddLauncherPage"
import LoginPage from "./LoginPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addLauncher" element={<AddLauncherPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
