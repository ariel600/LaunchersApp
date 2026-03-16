import { MongoClient } from "mongodb"
import { config } from "dotenv"
config()

const client = new MongoClient(process.env.URL)
export const db = client.db('launchers');

export async function connect() {
    try {
        await client.connect()
        console.log("Connected to mongoDB")
    } catch (error) {
        console.error(error.message)
    } finally {
        await client.close()
    }
}