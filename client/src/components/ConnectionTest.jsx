import { Navigate } from 'react-router'

export default function ConnectionTest({ children }) {
    const token = localStorage.getItem("token")
    if (!token) return <Navigate to={"/login"} />
    return children
}
