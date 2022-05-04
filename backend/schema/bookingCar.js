import mongoose from 'mongoose';

const bookingCarSchema = new mongoose.Schema({
    car:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bookedTimeSlot:{
        from:{type:String},
        to:{type:String}
    },
    totalHours: {type:Number},
    totalAmount:{type:Number},
    transactionId:{type:String},
    driverRequired:{type:Boolean}
},
  {timestamps:true}
)

const bookingCar = mongoose.model('Booking',bookingCarSchema)
export default bookingCar;