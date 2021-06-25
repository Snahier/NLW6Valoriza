import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { CreateUserController } from "./controllers/CreateUserController"
import { ensureAdminMiddleware } from "./middlewares/ensureAdmin"

const routes = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()

routes.post("/users", createUserController.handle)
routes.post("/tags", ensureAdminMiddleware, createTagController.handle)
routes.post("/authentication", authenticateUserController.handle)

export { routes }
