import express from "express"
import "reflect-metadata"
import "./database"
import { routes } from "./routes"

const app = express()

app.use(routes)

app.listen(3000, () => console.log("Running at http://localhost:3000"))
