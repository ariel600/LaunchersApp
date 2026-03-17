import { Route, Routes } from "react-router"
import '../styles/App.css'
import HomePage from "./HomePage"
import AddLauncherPage from "./AddLauncherPage"
import LoginPage from "./LoginPage"
import ProtectedRoute from "../components/ConnectionTest"
import RegisterPage from "./RegisterPage"

function App() {
  return (
    <Routes>
      <Route path="/register" element={
        <ProtectedRoute role="admin">
          <RegisterPage />,
        </ProtectedRoute>
      } />
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
