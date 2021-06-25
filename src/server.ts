import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import { expressErrorMiddleware } from "./expressErrorMiddleware"
import { routes } from "./routes"

const app = express()

app.use(express.json())
app.use(routes)
app.use(expressErrorMiddleware)

app.listen(3000, () => console.log("Running at http://localhost:3000"))
