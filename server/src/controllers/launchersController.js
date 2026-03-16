import { createLauncherService, getLaunchersService } from "../services/launchersService.js"

export function getLaunchersController(req, res) {
    try {
        const launchers = getLaunchersService()
        return res.status(200).json(launchers)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export function createLauncherController(req, res) {
    try {
        const { name, rocketType, latitude, longitude, city } = req.body
        const result = createLauncherService({ name, rocketType, latitude, longitude, city })
        return res.status(200).send(result.insertedId)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}