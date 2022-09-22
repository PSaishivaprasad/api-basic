// const { append } = require("express/lib/response");
const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  port: 5432,
  database: "myApi", // db name
});

client.connect();

client.query(`select * from "StudentsList"`, (err, res) => {
  // StudentsList table name
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }

  client.end;
});
