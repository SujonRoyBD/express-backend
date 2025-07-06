// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>this is sujon roy</h1>");
// });
// app.post("/", (req, res) => {
//   res.send("Hello post");
// });
// app.put("/", (req, res) => {
//   res.send("Hello put");
// });
// app.delete("/", (req, res) => {
//   res.send("Hello delet");
// });
// app.use((req, res) => {
//   res.send("not found");
// });

// module.exports = app;

// app.js
const express = require("express");
const app = express();
const userrouter =require("./user.routes")

app.use(userrouter)
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

module.exports = app;
