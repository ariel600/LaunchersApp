export function getLaunchers(req, res) {
    try {
        const launchers = getLaunchers()
        return res.status(200).json(launchers)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}