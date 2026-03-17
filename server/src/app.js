import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { connect } from "./db/connection.js"
import router from "./routes/launchersRoute.js"

config()
await connect()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use("/api/launchers", router)

app.listen(port, ()=>{
    console.log(`server runing on http://localhost:${port}`)
})