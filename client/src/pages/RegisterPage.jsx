import { useState } from 'react'
import { addUserApi } from '../api/auth'

export default function RegisterPage() {

    const [username, setUsernam] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [user_type, setUser_type] = useState("")

    const submit = async e => {
        e.preventDefault()
        try {
            const data = await addUserApi({
                username,
                password,
                email,
                user_type
            })
            if (data.error) alert(data.error)
            else alert("User created successfully")
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }

    return (
        <div className='register_page'>
            <h1 className='title'>Add User</h1>
            <form className='form-add-user' onSubmit={submit}>
                <input className='input-add-user' type="text" placeholder='username' required value={username} onChange={e => setUsernam(e.target.value)} />
                <input className='input-add-user' type="password" placeholder='password' required value={password} onChange={e => setPassword(e.target.value)} />
                <input className='input-add-user' type="email" placeholder='email' required value={email} onChange={e => setEmail(e.target.value)} />
                <input className='input-add-user' type="text" placeholder='type_user' required value={user_type} onChange={e => setUser_type(e.target.value)} />
                <button>Send</button>
            </form>
        </div>
    )
}
