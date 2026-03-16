import { createLauncherS, getLaunchersS } from "../services/launchersS"

export function getLaunchersC(req, res) {
    try {
        const launchers = getLaunchersS()
        return res.status(200).json(launchers)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export function createLauncherC(req, res) {
    try {
        const { name, rocketType, latitude, longitude, city } = req.body
        const result = createLauncherS({ name, rocketType, latitude, longitude, city })
        return res.status(200).send(result)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}