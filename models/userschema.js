const mongoose=require("mongoose");
const bcrypt= require("bcryptjs");
const userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now,
    }
});

userschema.pre("save", async function(next){
    const user=this;
    if(!user.isModified("password")){
        next();
    }
    try{
        const saltRound= await bcrypt.genSalt(10);
        const hash_password= await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
    }catch(error){
        next(error);
    }
});

const User= mongoose.model("User",userschema);

module.exports=User;