import express from "express"
import cors from "cors"
import formRouter from "./routers/form.route"
const app = express()
const port = 5000

app.use(
  cors({
    origin: "http://localhost:3000",
  })
)
app.use(express.json())

app.use("/api", formRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
