import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
const PORT = process.env.PORT||5000
const app = express() 
app.use(express.json());
app.use(cors());
const CONNECTION_URL = 'mongodb+srv://shivam:odgdqHBxfuPs9S9h@cluster0.l9bbq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`server is running on port ${PORT}`)))
.catch(error=>console.log(error.message));

import carRouter from './routes/carRoute.js'
import loginUser from './routes/userRoute.js'
import registerUser from './routes/userRoute.js'
import bookingPost from './routes/bookingRoute.js' 
import bookingGet from './routes/bookingRoute.js'
import editCar from './routes/carRoute.js'
import deleteCar from './routes/carRoute.js'
app.use('/api/data',carRouter)
app.use('/api/data',loginUser)
app.use('/api/data',registerUser)
app.use('/api/data',bookingPost)
app.use('/api/data',bookingGet)
app.use('/api/data',editCar)
app.use('/api/data',deleteCar)