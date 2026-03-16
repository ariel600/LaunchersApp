import { ObjectId } from "mongodb";
import { db } from "../db/connection.js";


export async function getLaunchersService() {
    try {
        const collection = db.collection('launchers');
        const launchers = await collection.find({}).toArray()
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

export async function getLauncherService(id) {
    try {
        const collection = db.collection('launchers');
        const launcher = await collection.findOne({ _id: new ObjectId(id) })
        return launcher
    } catch (error) {
        console.error(error.message)
        throw new Error(error.message);
    }
}