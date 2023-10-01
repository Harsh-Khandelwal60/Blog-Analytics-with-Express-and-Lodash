import mongoose from "mongoose";


const blogSchema = mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    id:{
        type:String,
        require: true
    },
    image_url:{
        type:String,
        require: true
    }
})

const Blog = mongoose.model("Blog",blogSchema);
export default Blog