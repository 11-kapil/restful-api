const express=require("express");
const Student =require ("./model/student.js");

const app=express();
const port=process.env.PORT || 3000;

app.use(express.json()); 
require("./db/conn.js");

// create a new student using promises
// app.post("/students",(req,res)=>{
//     // console.log(req.body);
//     const user=new Student(req.body);

//     user.save().then(()=>{
//         res.send(user);
//     }).catch((e)=>{
//         res.send(e);
//     })
// })

app.post("/students",async(req,res)=>{
    try{
        const user=new Student(req.body);
        const createUser= await user.save();
    
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }
})


// read the data of registered Students
app.get("/students",async (req,res) => {
    try{
        const studentsData =await Student.find();
        res.send(studentsData);
    }
    catch(e){
        res.send(e);
    }
})

// get the individual student data using id

app.get("/students/:id",async (req,res) =>{
    const _id=req.params.id;
    const studentData=await Student.findById(_id);
    res.status(404).send(studentData);
})


// update the students by it id
app.patch("/students/:id", async (req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudents= await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateStudents);
    }
    catch{
        res.status(400).send(e);
    }
})

// delete the students by id
app.delete("/students/:id" , async(req,res)=>{
    try{
        const deleteStudent=await Student.findByIdAndDelete(req.params.id);
        res.status(400).send();
    }
    catch(e){
        res.status(500).send(e);
    }
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port} `);
})

// you do need express.json() and express .urilencoded()
// for get requests or delete requests. We only need it for
// post and put request

//express.json is a method inbuilt in express to recognise the incoming
// Request object as a JSON Object. This method is called as a middleware
// in your application using the code: app.use(express.json());