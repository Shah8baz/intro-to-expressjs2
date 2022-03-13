// can call "express or anything that makes sense"here we are basically importing a library and putting it in variable called express
const express = require("express");

// can call whatever we have app, PORT or anything ele that makes sense or defines function its dealing with- in this function we take the express lib and run it- pile of code or bunch of code
const app = express ();
// PORT also same thing call it whatever , 4001 is where we want express engine to connect to our network - anyone who makes resquest to our system it come to our computer to 4001 where xpress will be sitting 
const PORT = 4000;

//hey app i want you to listen to PORT 4000 and once you are up and listening i want you to run the function in console.log 
// app.listen(PORT, function (){
//     console.log(`Listening on port ${PORT}`);
//     console.log("Listening to port", PORT);
// });
// above function can also be done - like this and remove everything after PORT, and put this exoPortNumber
function ecoPortNumber(){
    console.log(`Listening on port ${PORT}`);
    console.log("Listening to port", PORT);
}
app.listen(PORT,ecoPortNumber)

function helloW (req,res){
    res.send('Hello World!')
}
const hello = (req,res) => { 
    res.send('Hello World! 2');
}

app.get('/2', helloW);
app.get('/3', hello);
