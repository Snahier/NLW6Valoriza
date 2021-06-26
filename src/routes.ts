import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { CreateTagController } from "./controllers/CreateTagController"
import { CreateUserController } from "./controllers/CreateUserController"
import { ListTagsController } from "./controllers/ListTagsController"
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController"
import { ListUsersController } from "./controllers/ListUsersController"
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController"
import { ensureAdminMiddleware } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const routes = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSentComplimentsController =
  new ListUserSentComplimentsController()
const listUserReceivedComplimentsController =
  new ListUserReceivedComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

routes.post("/users", createUserController.handle)

routes.post(
  "/tags",
  ensureAuthenticated,
  ensureAdminMiddleware,
  createTagController.handle
)
routes.get("/tags", listTagsController.handle)

routes.post("/authentication", authenticateUserController.handle)

routes.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
)

routes.get("/users", ensureAuthenticated, listUsersController.handle)
routes.get(
  "/users/compliments/sent",
  ensureAuthenticated,
  listUserSentComplimentsController.handle
)
routes.get(
  "/users/compliments/received",
  ensureAuthenticated,
  listUserReceivedComplimentsController.handle
)

export { routes }
