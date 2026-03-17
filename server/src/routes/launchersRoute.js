import express from "express"
import { createLauncherController, getLauncherController, getLaunchersController } from "../controllers/launchersController.js"
import { roleAll, roleIntelligenceAndAdmin } from "../middlewares/loginMid.js"
import { tokenMid } from "../middlewares/tokenMid.js"

const router = express.Router()

router.get("/", tokenMid, roleAll, getLaunchersController)
router.get("/:id", tokenMid, roleAll, getLauncherController)
router.post("/", tokenMid, roleIntelligenceAndAdmin, createLauncherController)

export default router