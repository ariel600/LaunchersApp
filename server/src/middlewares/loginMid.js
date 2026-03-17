export async function roleAll(req, res, next) {
    try {
        if (
            req.user.user_type === "admin" ||
            req.user.user_type === "intelligence" ||
            req.user.user_type === "air"
        ) return next()
        return res.status(403).json({ error: "No permissions" })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export async function roleIntelligenceAndAdmin(req, res, next) {
    try {
        if (
            req.user.user_type === "admin" ||
            req.user.user_type === "intelligence"
        ) return next()
        return res.status(403).json({ error: "No permissions" })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export async function roleAdmin(req, res, next) {
    try {
        if (
            req.user.user_type === "admin"
        ) return next()
        return res.status(403).json({ error: "No permissions" })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: error.message })
    }
}