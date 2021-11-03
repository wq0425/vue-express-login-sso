const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('./config/db');
const routers = require('./router');
const app = express();

mongo(app)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
routers(app)

app.listen('3001', (req, res) => {
    console.log('http://localhost:3001')
})