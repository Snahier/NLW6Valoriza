import { Router } from "express"
import { CreateTagController } from "./controllers/CreateTagController"
import { CreateUserController } from "./controllers/CreateUserController"

const routes = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

routes.post("/users", createUserController.handle)
routes.post("/tags", createTagController.handle)

export { routes }
