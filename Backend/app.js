require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

const port = process.env.PORT;

require("./db/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//link the router
app.use("/", require("./router/auth"));

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
