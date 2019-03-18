const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));
app.listen(port, function () {
    console.log("Omar listenin'");
});

app.post("/calculate", (req, res) => {
    //this uses the calculate module
    calculate.calculateProblem(req.body);
    res.sendStatus(201);
});
app.get("/calculate", (req, res) => {
    console.log("in app get calculate funct");
    //res.send(calculate.calculationsArr);
});

app.delete("/calculate", (req, res) => {
    console.log("in app get calculate funct");
    //res.send(calculate.calculationsArr);
});
