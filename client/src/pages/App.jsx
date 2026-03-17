import { Route, Routes } from "react-router"
import '../styles/App.css'
import HomePage from "./HomePage"
import AddLauncherPage from "./AddLauncherPage"
import LoginPage from "./LoginPage"
import ProtectedRoute from "../components/ConnectionTest"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      <Route path="/addLauncher" element={
        <ProtectedRoute>
          <AddLauncherPage />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App
