import express from "express"
import { createLauncherController, getLauncherController, getLaunchersController } from "../controllers/launchersController.js"
import { roleAll, roleIntelligenceAndAdmin } from "../middlewares/loginMid.js"

const router = express.Router()

router.get("/", roleAll, getLaunchersController)
router.get("/:id", roleAll, getLauncherController)
router.post("/", roleIntelligenceAndAdmin, createLauncherController)

export default router