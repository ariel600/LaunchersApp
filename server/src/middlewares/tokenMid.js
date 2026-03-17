import { verifyToken } from "../utils/token.js"

export async function tokenMid(req, res, next) {
    try {
        const token = req.headers.token
        const user = verifyToken(token)
        req.user = user
        return next()
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}