import { db } from "../db/connection.js";

const collection = db.collection('users');

export function getLaunchersS() {
    try {
        const launchers = collection.find({})
        return launchers
    } catch (error) {
        console.error(error.message)
    }
}

export async function createLauncherS(launcher) {
    try {
        const result = await collection.insertOne(launcher);
        console.log(result);
    } catch (error) {
        console.error(error.message)
    }
}