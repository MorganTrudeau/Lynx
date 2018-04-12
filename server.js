const mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Routes
const route = require('./routes/route');

app.listen(port, () => console.log(`Listening on port ${port}`));

// Production

app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', (req, res) => res.render('index'));
