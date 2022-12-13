const express = require("express");

const routes = express.Router();

const userControllers = require("./userControllers");

routes.get("/api/users", userControllers.browse);

module.exports = routes;
