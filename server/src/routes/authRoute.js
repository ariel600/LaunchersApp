import express from "express"
import { createUserController, deleteUserController, getUserController, loginController, updateUserController } from "../controllers/authController.js"

const router = express.Router()

router.post("/register", createUserController)
router.put("/register/update", updateUserController)
router.delete("/register/delete/:id", deleteUserController)
router.post("/login", loginController)
router.post("/getUser", getUserController)

export default router