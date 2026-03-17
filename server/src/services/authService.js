import { db } from "../db/connection.js";

export async function createUserService(user) {
    try {
        const collection = db.collection('users');
        const result = await collection.insertOne(user);
        console.log(result);
    } catch (error) {
        console.error(error)
        throw new Error(error);
    }
}
