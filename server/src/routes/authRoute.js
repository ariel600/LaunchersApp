import express from "express"
import { createUserController } from "../controllers/authController.js"

const router = express.Router()

router.post("/register", createUserController)

export default router