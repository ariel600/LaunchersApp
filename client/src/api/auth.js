export async function loginApi(username, password) {
    try {
        const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        const token = await res.json()
        return token
    } catch (error) {
        console.error(error)
        throw error
    }
}