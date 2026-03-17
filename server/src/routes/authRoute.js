import express from "express"
import { createUserController, deleteUserController, updateUserController } from "../controllers/authController.js"

const router = express.Router()

router.post("/register", createUserController)
router.put("/register/update", updateUserController)
router.delete("/register/delete/:id", deleteUserController)

export default router