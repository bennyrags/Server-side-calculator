const express = require("express");
const bodyParser = require("body-parser");
const calculate = require('./modules/calculate');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));

app.listen(PORT, function () {
    console.log("Omar listenin'");
});

app.post("/calculate", (req, res) => {
    //this uses the calculate module
    calculate.calculateProblem(req.body);
    res.sendStatus(201);
});
app.get("/calculate", (req, res) => {
    console.log("in app get calculate funct");
    res.send(calculate.calculationsArr);
});

