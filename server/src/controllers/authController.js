import { createUserService, deleteUserService, loginService, updateUserService } from "../services/authService.js"
import { signToken, verifyToken } from "../utils/token.js"

export async function createUserController(req, res) {
    try {
        const { username, password, email, user_type } = req.body
        const user = await createUserService({ username, password, email, user_type, last_login: "none" })
        return res.status(200).json(user)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export async function updateUserController(req, res) {
    try {
        const { id, ...data } = req.body
        const user = await updateUserService(id, data)
        return res.status(200).json(user)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export async function deleteUserController(req, res) {
    try {
        const { id } = req.params
        const result = await deleteUserService(id)
        return res.status(200).json(result)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export async function loginController(req, res) {
    try {
        const { username, password } = req.body
        const user = await loginService(username, password)
        if (user) {
            const payload = {
                id: user._id,
                username: user.username,
                user_type: user.user_type
            }
            const token = signToken(payload)
            await updateUserService(user._id, { login_last: new Date().toString() })
            return res.status(200).json(token)
        }
        return res.status(401).json({ error: "Incorrect username or password" })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export async function getUserController(req, res) {
    try {
        const { token } = req.headers.token
        const user = verifyToken(token)
        return res.status(200).json(user)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}