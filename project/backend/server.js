"use strict"

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
require("dotenv").config();

const app = express();
const client = new MongoClient(process.env.CONNECTION_STRING);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("*", (req, res)=>{
    res.send({"msg" : "Hello"});
});

app.listen(7000, ()=>{
    console.log("server is running at port http://localhost:7000/");
});