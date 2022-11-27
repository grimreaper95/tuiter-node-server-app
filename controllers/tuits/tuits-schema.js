import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    handle: "",
    userName: "",
    topic:"",
    time:"",
    title:"",
    tuitContent:"",
    dislikes:"",
    image:"",
    key_id:Number
}, {collection: 'tuits'});
export default schema;