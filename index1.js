var express= require('express');
var app=express();

app.use(express.json());

let students=[
    {id:1,name:"AAli",mobileno:954215835,address:"ABCD",age:25},
    {id:2,name:"Sara",mobileno:953233435343,address:"ABCD",age:30}
];

app.post('/student',(req,res)=>{
    const newstudents={
        id:students.length+1,
        name: req.body.name,
        mobileno: req.body.mobileno,
        address: req.body.address,
        age: req.body.age
    };
    students.push(newstudents);
    res.send(newstudents);
});
app.get('/student',(req,res)=>{
    res.send(students);
})
app.get('/student/:id',(req,res)=>{
    const us= students.find(i=> i.id == req.params.id);
    if(!us) res.status(404).send("not found");
    res.send(us);
})
app.put('/student/:id',(req,res)=>{
    const us= students.find(i=> i.id == req.params.id);
    if(!us) res.status(404).send("not found");
    us.name=req.body.name;
    us.mobileno=req.body.mobileno,
    us.address=req.body.address,
    us.age=req.body.age;
    res.send(us);
})

app.delete('/users/:id',(req,res)=>{
    const us= students.filter(i=> i.id != req.params.id);
    if(!us) res.status(404).send("not found");
    res.send("User Deleted");
})
app.listen(9000, ()=>console.log("API Started listening......."));