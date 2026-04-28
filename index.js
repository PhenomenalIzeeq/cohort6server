const express= require('express');

const app = express()

const port = 8080

app.get('/',(req , res)=>{
    response.send("server is up and running")
})

const users=[
    {
        name: "Isaac",
        age: 25,
        grade: "A",
        id:1
    },{
        name: "Chidimma",
        age: 23,
        grade: "B",
        id:2
    },{
        name: "Benita",
        age: 13,
        grade: "A",
        id:3
    }
]


const name= "Isaac Phenomenal"
console.log("My name is "+ name)
console.log(`My name is ${name}`)

//GET all users
app.get('/users', (req, res)=>{
    res.status(200).json(users);
});

//GET a single user by ID
app.get('/users/:id',(req,res)=> {
    const id= parseInt(req.params.id);
    const user= users.find(el=> el.id===id);

    if (!user){
        return res.status(404).json({error: 'user not found'});
    }
    res.status(200).json(user);
});

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})
