const express = require("express");

const routes = express.Router();

const userControllers = require("./userControllers");

routes.get("/api/users", userControllers.browse);
routes.get("/api/users/:id", userControllers.read);

module.exports = routes;
