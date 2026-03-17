import { config } from "dotenv"
import jwt from "jsonwebtoken"
config()

export function signToken(payload) {
    return jwt.sign(payload, process.env.SECRITE, { expiresIn: "1h" })
}

export function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET)
}