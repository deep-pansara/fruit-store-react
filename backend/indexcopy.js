const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 5000;
const appRoute = require("./Routes/appRoutes")
const path = require("path");



const app = express();
app.use(cors());
app.use(express.json());

app.use(appRoute)

app.use(express.static('static'))

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
})

const URL =
  "mongodb+srv://pansaradeep:Deeppatel98791@cluster0.lrlzyps.mongodb.net/DeepFruitStore?retryWrites=true&w=majority";
mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on port " + PORT);
    });
    console.log("Database connection Established")
  })

  .catch((err) => console.log(err));