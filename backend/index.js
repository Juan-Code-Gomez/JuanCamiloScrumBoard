const express = require ("express");
const cors = require ("cors");
const {dbConnection} = require("./db/db");
const Role = require("./routers/role")
const User = require("./routers/user");
const Auth = require("./routers/auth");
const Board = require("./routers/board");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", Role);
app.use("/api/user", User);
app.use("/api/auth/", Auth);
app.use("/api/board/", Board);



app.listen(process.env.PORT, () => console.log("Backend server running OK, on port:", process.env.PORT));

dbConnection();