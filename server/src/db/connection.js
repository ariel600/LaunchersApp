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

const collectionLaunchers = await db.listCollections({ name: "launchers" }).toArray()

if (collectionLaunchers.length === 0) {
    await db.createCollection('launchers', {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                properties: {
                    name: { bsonType: "string" },
                    rocketType: { bsonType: "string" },
                    latitude: { bsonType: "number" },
                    longitude: { bsonType: "number" },
                    city: { bsonType: "string" }
                }
            }
        }
    })
}

const collectionUsers = await db.listCollections({ name: "users" }).toArray()

if (collectionUsers.length === 0) {
    await db.createCollection('users', {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                properties: {
                    username: { bsonType: "string" },
                    password: { bsonType: "string" },
                    email: { bsonType: "string" },
                    user_type: { bsonType: "string" },
                    last_login: { bsonType: "string" }
                }
            }
        }
    })
}