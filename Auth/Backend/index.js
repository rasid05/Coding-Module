const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "2003",
    database: "register"
})

app.post('/register', (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const pass = req.body.pass;

    con.query("INSERT INTO student (name, email, password) VALUES (?, ?, ?)", [name, email, pass],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "ENTER CORRECT ASKED DETAILS!" })
            }
        }
    )
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    con.query("SELECT * FROM student WHERE email = ? AND password = ?", [email, pass],
        (err, result) => {
            if (err) {
                req.setEncoding({ err: err });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: "WRONG USERNAME OR PASSWORD!" })
                }
            }
        }
    )
})

app.listen(3001, () => {
    console.log("running backend server");
})