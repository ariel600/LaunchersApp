import { ObjectId } from "mongodb";
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

export async function updateUserService(id, data) {
    try {
        const collection = db.collection('users');
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        )
        return result
    } catch (error) {
        console.error(error)
        throw new Error(error);
    }
}

export async function deleteUserService(id) {
    try {
        const collection = db.collection('users');
        const result = await collection.deleteOne(
            { _id: new ObjectId(id) },
        )
        return result
    } catch (error) {
        console.error(error)
        throw new Error(error);
    }
}