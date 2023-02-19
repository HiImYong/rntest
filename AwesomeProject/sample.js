const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test_react",
});

app.get("/", (req, res) => {
  const sqlQuery = "SELECT * from users";
  db.query(sqlQuery, (err, result) => {
    res.send(JSON.stringify(result));
    // console.log(req);
    console.log(res.send);
    console.log(typeof(JSON.stringify(result)));
    console.log(err);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});