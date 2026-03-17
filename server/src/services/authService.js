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

export async function loginService(username, password) {
    try {
        const collection = db.collection('users');
        const user = await collection.findOne({ username, password })
        return user
    } catch (error) {
        console.error(error)
        throw new Error(error);
    }
}

export async function getUserService(id) {
    try {
        const collection = db.collection('users');
        const user = await collection.findOne({ _id: new ObjectId(id) })
        return {
            id: user._id,
            username: user.username,
            email: user.email,
            user_type: user.user_type,
            last_login: user.last_login
        }
    } catch (error) {
        console.error(error)
        throw new Error(error);
    }
}