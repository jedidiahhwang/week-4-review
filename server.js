const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/get", (req, res) => {
    console.log("Test endpoint hit");
    res.status(200).send("Request handled");
})

app.post("/post", (req, res) => {
    console.log(req.body);
    const {name, hobbies} = req.body;

    res.status(200).send(`The body you sent contains ${name} and ${hobbies}`);
})

app.get("/get/:id", (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    
    res.status(200).send(`The param you sent was ${req.params.id}`);
})

app.listen(3434, () => {
    console.log("Port listening on 3434");
})