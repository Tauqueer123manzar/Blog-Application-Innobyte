// ====================================== Framework ================================================
const express = require("express");
const app = express();
const port = 8080;
const user=require("./models/userschema");

// ============================================= mongoose connection ==============================================
const mongoose=require("mongoose");
main().then((res)=>{
    console.log("!............Mongodb database connection sucessfull..............!");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Innobyte");
};

// const newuser= new user({
//     username:"Md Taquueer manzar",
//     password:"Taaj@123",
//     email:"mdtauqueermanzar@gmail.com"
// });

newuser.save();
// ================================================== API Call =======================================================
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get("/login", (req, res) => {
    res.send("Login is working!!!");
});
