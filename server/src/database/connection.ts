import mysql from "mysql2";

export const pool = mysql
  .createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "test",
    password: "test",
    database: "test",
  })
  .promise();
