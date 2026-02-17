var express= require('express');
var app=express();

app.get('/',function(req,res){
    res.send("hello from the api");
});
// app.get('/time',(req,res)=>{
//     var time= new Date().toLocaleTimeString();
//     res.send(`Time is : ${time}`);
// });
// app.get('/date',(req,res)=>{
//     var date=new Date().toLocaleDateString();
//     res.send(`Date : ${date}`);
// });
// app.get('/wish/:name',(req,res)=>{
//     var name = req.params.name;
//     res.send(`Hello ${name}`);
// });
// app.get('/square/:n',(req,res)=>{
//     var n=req.params.n;
//     res.send(`Square of ${n} is ${n*n}`);
// });
// app.get('/addition/:a/:b',(req,res)=>{
//     var a=Number(req.params.a);
//     var b= Number(req.params.b);
//     var c=a+b;
//     res.send(`Add of ${a} and ${b} is : ${c}`);
// }) 

app.use(express.json());
let users=[
    {id:1,name:"Ali",age:25},
    {id:2,name:"Sara",age:30}
];

app.post('/user',(req,res)=>{
    const newUser={
        id:users.length+1,
        name: req.body.name,
        age: req.body.age
    };
    users.push(newUser);
    res.send(newUser);
});
app.get('/usersData',(req,res)=>{
    res.send(users);
})
app.get('/users/:id',(req,res)=>{
    const us= users.find(i=> i.id == req.params.id);
    if(!us) res.status(404).send("not found");
    res.send(us);
})
app.put('/users/:id',(req,res)=>{
    const us= users.find(i=> i.id == req.params.id);
    if(!us) res.status(404).send("not found");
    us.name=req.body.name;
    us.age=req.body.age;
    res.send(us);
})

app.delete('/users/:id',(req,res)=>{
    const us= users.filter(i=> i.id != req.params.id);
    if(!us) res.status(404).send("not found");
    res.send("User Deleted");
})
app.listen(9000, ()=>console.log("API Started listening......."));