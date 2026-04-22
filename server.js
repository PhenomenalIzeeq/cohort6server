// step 1: import the express module
const express = require('express');


//step 2: Create an express application instance
const app = express();
const studentInfo =students=[
    {
        name: "Isaac",
        age: 25,
        grade: "A"
    },{
        name: "Chidimma",
        age: 23,
        grade: "B"
    },{
        name: "Benita",
        age: 13,
        grade: "A"
    }
]

//body parsing
app.use(express.json())

app.get("/all-data", (req, res)=>{
    res.json(studentInfo[0])
})
//Step 3: Define a route handler for GET requests to /
app.get('/', function(req, res){
    res.send('Hello, World! Welcome to Express.js!');
});
app.get('/about' ,(req , res)=>{
    res.send("this is about page")
});
app.get("/contact", function(req, res){
    res.send("this is contact page")
});

//step 4: Start listening on port 3000
app.listen(3000,function(){
    console.log('Server is up and running');
});
