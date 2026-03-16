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