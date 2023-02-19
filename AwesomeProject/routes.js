const express = require('express'); // 서버 경로를 생성하는 노드 프레임워크입니다. API 등을 만드는 데 탁월합니다.
const bodyParser = require('body-parser'); // request body에서 데이터를 가져오는 데 도움이 됩니다.
const mysql = require('mysql'); // MySQL 모듈을 가져오고 데이터베이스와의 연결을 만듦

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '24320919',
  database : 'test_react'
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (connection, err) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM users', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send("result : "+results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});