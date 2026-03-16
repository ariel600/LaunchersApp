import { db } from "../db/connection.js";

const collection = db.collection('users');

export function getLaunchers() {
    try {
        const launchers = collection.find({})
        return launchers
    } catch (error) {
        console.error(error.message)
    }
}