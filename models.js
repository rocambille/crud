const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const findAll = () => {
  return database.query("select * from user");
};

const find = (id) => {
  return database.query("select * from user where id=?", [id]);
};

const create = (user) => {
  return database.query("insert into user (email, password) values (?, ?)", [
    user.email,
    user.password,
  ]);
};

const update = (user) => {
  return database.query("update user set email=?, password=? where id=?", [
    user.email,
    user.password,
    user.id,
  ]);
};

module.exports = {
  user: {
    findAll,
    find,
    create,
    update,
  },
};
