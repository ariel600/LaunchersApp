import { createUserService } from "../services/authService.js"

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