import mongoose from 'mongoose'

const createCarSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    charge:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
    },
    fuel:{
        type:String,
    },
    capacity:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const carSchema = mongoose.model('Car',createCarSchema);

export default carSchema;