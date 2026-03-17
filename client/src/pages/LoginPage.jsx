import { useState } from 'react'
import { loginApi } from '../api/auth'
import { useNavigate } from "react-router"

export default function LoginPage() {

    const [username, setUsernam] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const submit = async e => {
        e.preventDefault()
        try {
            const data = await loginApi(username, password)
            if (data.token) {
                localStorage.setItem("token", data.token)
                navigate("/")
            }
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }

    return (
        <div className='login-page'>
            <h1 className='title'>Login Page</h1>
            <form className='form-login' onSubmit={submit}>
                <input type="text" className='input-page' value={username} required placeholder='usernam' onChange={e => setUsernam(e.target.value)} />
                <input type="password" className='input-page' value={password} required placeholder='password' onChange={e => setPassword(e.target.value)} />
                <button>Send</button>
            </form>
        </div>
    )
}
