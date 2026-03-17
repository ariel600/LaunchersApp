import express from "express"
import { createUserController, updateUserController } from "../controllers/authController.js"

const router = express.Router()

router.post("/register", createUserController)
router.put("/register/update", updateUserController)

export default router