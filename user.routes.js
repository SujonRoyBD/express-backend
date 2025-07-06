// const express = require("express");
// import { RequestHeadersMessage } from "./node_modules/undici-types/diagnostics-channel.d";
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("user rpure");
// });
// router.get("/login", (req, res) => {
//   res.send("user login");
// });
// router.get("/resister", (req, res) => {
//   res.send("user resister");
// });
// router.use((req, res) => {
//   res.send("not found");
// });
// module.exports = router;
const bodyParser = require("body-parser");

const express = require("express");
const router = express.Router();

router.use(bodyParser.urlencoded());

router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/trangleBase/index.html");
});
router.get("/trangle", (req, res) => {
  res.sendFile(__dirname + "/trangleBase/trangle.html");
});
router.post("/trangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * base * height;
  res.send(`data pyce re vai : ${area}`);
});

router.get("/", (req, res) => {
  res.send("user");
});
router.use((req, res, next) => {
  res.status(400).send("somewwwww");
});
router.get("/login", (req, res) => {
  res.send("logins");
});
router.get("/resister", (req, res) => {
  //   res.status(200).json({
  //     massege: "i am sujon",
  //     statusCode: 200,
  //   });
  //   res.redirect("/login");
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/resister.html");
});
router.get("/home", (req, res) => {
  //   res.status(200).json({
  //     massege: "i am sujon",
  //     statusCode: 200,
  //   });
  //   res.redirect("/login");
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/home.html");
});

router.get("/id", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  res.send(`this is e id ${id} : name is ${name}`);
});
router.get("/userId/:id/userAge/:age", (req, res) => {
  try {
    const id = req.params.id;
    const age = req.params.age;
    console.log(id, age);
    res.send(`this is e id ${id} : name is ${age}`);
  } catch (error) {
    console.log(`error from useid route`);
  }
});
// router.get("/userId/:id/userAge/:age", (req, res) => {
//   const id = req.header("id");
//   const age = req.header("age");
//   res.send(`this is e id ${id} : name is ${age}`);
// });
module.exports = router;
