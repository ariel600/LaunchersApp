export async function getAllLaunchers() {
    try {
        const res = await fetch("http://localhost:3000/api/launchers")
        const launchers = await res.json()
        return launchers
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function addLauncher(launcher) {
    try {
        const res = await fetch("http://localhost:3000/api/launchers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(launcher)
        })
        const result = await res.json()
        return result
    } catch (error) {
        console.error(error)
        throw error
    }
}