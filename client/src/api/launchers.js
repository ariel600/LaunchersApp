export async function getAllLaunchers() {
    try {
        const res = await fetch("http://localhost:3000/api/launchers", {
            headers: {
                token: localStorage.getItem("token")
            }
        })
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
                "Content-Type": "application/json",
                token: localStorage.getItem("token")
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