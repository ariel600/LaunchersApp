import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { connect } from "./db/connection.js"
import launchers from "./routes/launchersRoute.js"
import auth from "./routes/authRoute.js"

config()
await connect()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use("/api/launchers", launchers)
app.use("/api/auth", auth)

app.listen(port, ()=>{
    console.log(`server runing on http://localhost:${port}`)
})