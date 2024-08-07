const mongoose=require("mongoose");

const commentSchema= new mongoose.Schema({
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    author_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});

const Comment= mongoose.model("Comment",commentSchema);
module.exports=Comment;