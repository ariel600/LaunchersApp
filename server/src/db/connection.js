import { MongoClient } from "mongodb"
import { config } from "dotenv"
config()

const client = new MongoClient(process.env.URL)
export const db = client.db('LaunchersApp');

export async function connect() {
    try {
        await client.connect()
        console.log("Connected to mongoDB")
    } catch (error) {
        console.error(error.message)
    }
}

const collection = await db.listCollections({ name: "launchers" }).toArray()

if (collection.length === 0) {
    await db.createCollection('launchers', {
        validator: {
            $jsonSchema: {
                name: "string",
                rocketType: "Shahab3" | "Fetah110" | "Radwan" | "Kheibar",
                latitude: "number",
                longitude: "number",
                city: "string"
            }
        }
    })
}