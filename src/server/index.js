const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
app.get("/api/helloWorld", (req, res) =>
  res.send({ helloFromBackend: `${os.userInfo().username}, dope backend yo` })
);
app.listen(8080, () => console.log("Listening on port 8080!"));