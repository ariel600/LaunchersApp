import { db } from "../db/connection.js";


export function getLaunchersService() {
    try {
        const collection = db.collection('launchers');
        const launchers = collection.find({})
        return launchers
    } catch (error) {
        console.error(error.message)
        throw new Error(error.message);
    }
}

export async function createLauncherService(launcher) {
    try {
        const collection = db.collection('launchers');
        const result = await collection.insertOne(launcher);
        console.log(result);
    } catch (error) {
        console.error(error)
        throw new Error(error);
    }
}