const express = require("express");

const routes = express.Router();

const userControllers = require("./userControllers");

routes.get("/api/users", userControllers.browse);
routes.get("/api/users/:id", userControllers.read);
routes.put("/api/users/:id", userControllers.edit);
routes.post("/api/users", userControllers.add);
routes.delete("/api/users/:id", userControllers.destroy);

module.exports = routes;
