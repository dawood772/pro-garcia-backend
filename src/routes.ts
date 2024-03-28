import { Router } from "express";
import SettingsController from "./controllers/SettingsController";
import UsersController from "./controllers/UsersController";
import MessagesController from "./controllers/MessagesController";
import DevicesController from "./controllers/DevicesController";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();
const devicesController = new DevicesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);
routes.get("/devices", devicesController.list);
routes.post("/devices", devicesController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export default routes;
