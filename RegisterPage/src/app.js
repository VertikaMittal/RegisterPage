const express=require ("express");
const bodyParser=require ("body-parser");
const ejs=require("ejs");
const app=express();
const Registration=require("./models/students");
app.use(express.static("public"));
require("./db/connection");
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",async(req,res)=>{
    try{
     const user= new Registration({
         name:req.body.name,
         email:req.body.email,
         phone:req.body.phno,
         address:req.body.address,
         pincode:req.body.pin,
         password:req.body.password
     })
     const result=await user.save();
     res.status(201).send("/");
    }catch(e){
        res.status(400).send(e);
    }

})

app.listen(port,()=>{
    console.log(`connection is setup on port ${port}`);
})