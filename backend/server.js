const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

require("dotenv").config();

const port = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser())

app.use("/api", require("./routes/authRoutes"));

app.get("/", (req, res) => res.send("My backend"));

app.listen(port, () => console.log("Server is running"));
