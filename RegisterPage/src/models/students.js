const validator=require("validator");
const mongoose=require("mongoose");


const registerSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:[true,"Email is already registered"],
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    phone:{
        type:Number,
        unique:[true,"Phone number is already registered"],
        required:true,
        min:10
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})
const Registration=new mongoose.model('Registration',registerSchema);
module.exports=Registration;