//backend를 위한 시작점
const express = require("express");
//app을 만들어야합니다
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://kangji:qwe123@ac-vftwtbl-shard-00-00.cg35n6x.mongodb.net:27017,ac-vftwtbl-shard-00-01.cg35n6x.mongodb.net:27017,ac-vftwtbl-shard-00-02.cg35n6x.mongodb.net:27017/?ssl=true&replicaSet=atlas-8leupq-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("hello world");
});
//port 번호 5000
app.listen(5000);
