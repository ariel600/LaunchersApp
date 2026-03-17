import express from "express"
import { createUserController, deleteUserController, getUserController, loginController, updateUserController } from "../controllers/authController.js"
import { roleAdmin, roleAll } from "../middlewares/loginMid.js"

const router = express.Router()

router.post("/register", roleAdmin, createUserController)
router.put("/register/update", roleAdmin, updateUserController)
router.delete("/register/delete/:id", roleAdmin, deleteUserController)
router.post("/login", loginController)
router.post("/getUser", roleAll, getUserController)

export default router