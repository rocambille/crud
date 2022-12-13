const express = require("express");

const routes = express.Router();

const userControllers = require("./userControllers");

routes.get("/api/users", userControllers.browse);
routes.get("/api/users/:id", userControllers.read);
routes.post("/api/users", userControllers.add);

module.exports = routes;
