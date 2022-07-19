//backend를 위한 시작점
const express = require("express");
//app을 만들어야합니다
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
//port 번호 5000
app.listen(5000);
