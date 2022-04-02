const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const path = require('path')

const cors = require('cors')

const app = express()

app.use(myconn(mysql, {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456789',
    database: 'images'
}))
app.use(cors())

app.use(express.static(path.join(__dirname, 'dbimages')))

app.use(require('./routes/routes'))

app.listen(9000, () => {
    console.log('server running on', 'http://localhost:' + 9000)
})

/* 
const xExpress = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const cors = require('cors');

const app = xExpress();

app.use(myconn(mysql, {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456789',
    database: 'images'
}));
app.use(cors());

app.use(require('./routes/routes'));

app.listen(9000, () => {
    console.log('Server is running on port','http://localhost:' +9000);
}) */

/*
npm init -y
npm i express
npm i nodemon
npm i mulder
$ npm i mysql2 express-myconnection
$ npm i cors
*/