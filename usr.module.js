//Declare basic variables



const { request, response } = require('express');
const express = require('express');
const userRouter = express.Router();
const mysql = require('mysql');

//Define the connection 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'istore'
});

//Open the connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});

userRouter.route('/getAll').get((request, response) => {
    //select users from your DB
    connection.query('select * from users', function(error, results, fields){
        //Add your logic here
        if(error) throw error;
        console.log(results[0]);
        response.json(results[0]);
    });
});

userRouter.route('/getByEmail/:email').get((request, response) => {
    //Get email from get call
    let email = request.params.email;
    console.log(email);

    //calling sql query using interpolation
    connection.query(`select * from users where email = '${email}'`, function(error, results, fields){
        //Add your logic here
        if(error) throw error;
        console.log(results[0]);
        response.json(results[0]);
    });
});

module.exports = userRouter;