const mongoose =require("mongoose");
const validator =require ("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    roll_no:{
        type:Number,
        required:true,
        unique:[true ,"roll number is already present"],
        minlength:1
    },
    email:{
        type:String,
        required: true,
        unique:[true ,"email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    phone:{
        type :Number,
        required: true,
        unique  :true,
        minlength:10,
        maxlength:10
    }

})

// we will create a new collection
const Student=new mongoose.model('Student',studentSchema);

module.exports =Student;