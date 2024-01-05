const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sneakerpride",
});

db.connect((error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Connected successfully");
  }
});

module.exports = db;
