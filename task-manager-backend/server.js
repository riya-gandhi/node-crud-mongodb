// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRoute = require("./routes/users");
const tasksRoute = require("./routes/tasks");

const app = express();

mongoose.connect("mongodb://localhost/taskmanager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", usersRoute);
app.use("/api/tasks", tasksRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
