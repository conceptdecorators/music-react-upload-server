require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// import routes
const feedbackRoutes = require("./routes/feedback");

// app
const app = express();
//  can you go to browser?
// middlewares
// app.use(express.static(path.resolve(__dirname + "/../client/build")));
app.use(morgan("dev"));
app.use(express.json());
// app.use(express.json());
app.use(cors());

// routes
app.use("/api", feedbackRoutes);

app.get("/", (req, res) => {
  res.send("Server is running")
})

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname + "/../client/build/index.html"));
// });
// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
