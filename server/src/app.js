import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { connect } from "./db/connection.js"
import { createLauncherController, getLaunchersController } from "./controllers/launchersController.js"

config()
await connect()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.get("/api/launchers", getLaunchersController)
app.get("/api/launchers/:id")
app.post("/api/launchers", createLauncherController)

app.listen(port, ()=>{
    console.log(`server runing on http://localhost:${port}`)
})