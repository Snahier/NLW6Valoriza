import express from "express"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import { errorsMiddleware } from "./middlewares/errors"
import { routes } from "./routes"

const app = express()

app.use(express.json())
app.use(routes)
app.use(errorsMiddleware)

app.listen(3000, () => console.log("Running at http://localhost:3000"))
