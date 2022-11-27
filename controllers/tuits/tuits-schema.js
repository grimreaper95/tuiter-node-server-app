import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    dislikes:Number,
    liked: Boolean,
    handle: "",
    userName: "",
    topic:"",
    time:"",
    title:"",
    tuitContent:"",
    image:"",
    _id: Number,
    key_id:Number
}, {collection: 'tuits'});
export default schema;