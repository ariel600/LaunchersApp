import express from "express"
import { createUserController, deleteUserController, getUserController, loginController, updateUserController } from "../controllers/authController.js"
import { roleAdmin, roleAll } from "../middlewares/loginMid.js"
import { tokenMid } from "../middlewares/tokenMid.js"

const router = express.Router()

router.post("/register", tokenMid, roleAdmin, createUserController)
router.put("/register/update", tokenMid, roleAdmin, updateUserController)
router.delete("/register/delete/:id", tokenMid, roleAdmin, deleteUserController)
router.post("/login", loginController)
router.get("/getUser", tokenMid, roleAll, getUserController)

export default router