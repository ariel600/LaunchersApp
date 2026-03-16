import express from "express"
import cors from "cors"
import { config } from "dotenv"
config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.get("/api/launchers")
app.get("/api/launchers/:id")
app.post("/api/launchers")

app.listen(port, ()=>{
    console.log(`server runing on http://localhost:${port}`)
})