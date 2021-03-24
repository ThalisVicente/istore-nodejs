/*
Initial notes:
Preparations -> 
. npm init
. npm install express cors mysql body-parser nodemon
. Inside "package.json" -> insert script 
. Just in case of this error: nodemon : File C:\Users\test\AppData\Roaming\npm\nodemon.ps1 cannot be loaded. The file C:\Users\test\AppData\Roaming\npm\nodemon.ps1 is not digitally signed. You   
cannot run this script on the current system. For more information about running scripts and setting execution policy, see about_Execution_Policies at
https:/go.microsoft.com/fwlink/?LinkID=135170. --> Run the command: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const usersRouter = require('./usr.module');

//Init
const app = express();
app.use(cors());
app.unsubscribe(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Listening Port 3000!');
})
//Hello World!
app.get('/', (request, response) =>{
    //Send response to the browser
    response.send("Hello World!");

})

app.use('/user', usersRouter);
// http://localhost:3000/user/getAll
// http://localhost:3000/user/getByEmail/thalis@email.com

