import mongoose from 'mongoose'

const createUserScema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const userSchema = mongoose.model('User',createUserScema)
export default userSchema

