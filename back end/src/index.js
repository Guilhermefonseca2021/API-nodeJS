const express = require("express");
const app = express();
const routes = require('./routes')

const cors = require("cors");

app.use(express.json());
app.use(cors());


// routes
app.use(routes)


// database



// server
app.listen(3333, console.log("Servidor online"))