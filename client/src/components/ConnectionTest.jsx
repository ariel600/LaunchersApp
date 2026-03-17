import { Navigate } from 'react-router'
import { getUser } from '../api/auth'
import { useEffect, useState } from 'react'

export default function ConnectionTest({ children, role }) {

    const [user, setUser] = useState(null)
    const [isLoging, setIsLogin] = useState(true)

    useEffect(() => {
        const fatchUser = async () => {
            try {
                const user = await getUser()
                setUser(user)
            } catch {
                setUser(null)
            } finally {
                setIsLogin(false)
            }
        }
        fatchUser()
    }, [])

    if (isLoging) return <div>is Loging</div>
    if (!user) return <Navigate to={"/login"} />
    if (role && role !== user.user_type) {
        alert("You do not have access permission.")
        return <Navigate to={"/"} />
    }
    return children
}
