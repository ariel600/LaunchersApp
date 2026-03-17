import express from "express"
import { createLauncherController, getLauncherController, getLaunchersController } from "../controllers/launchersController.js"

const router = express.Router()

router.get("/", getLaunchersController)
router.get("/:id", getLauncherController)
router.post("/", createLauncherController)

export default router