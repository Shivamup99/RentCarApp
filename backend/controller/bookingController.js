import Booking from '../schema/bookingCar.js';
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51IGGftG9WGGZMzGMdhIrvY9jN153U4hTzSxoq8drDxuryTX5dhwIDLsd0qKhcHd9O7sxDxR1Vt8Xo9cyBrVsMx4G00MoevUrRX');
//const stripe = require('stripe')('sk_test_51IGGftG9WGGZMzGMdhIrvY9jN153U4hTzSxoq8drDxuryTX5dhwIDLsd0qKhcHd9O7sxDxR1Vt8Xo9cyBrVsMx4G00MoevUrRX')
import {v4 as uuidv4} from 'uuid';

export const bookingCar =async(req,res)=>{
    
    const {token} = req.body;
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source : token.id
        })
        const payment = await stripe.charges.create({
            amount:req.body.totalAmount*100,
            customer:customer.id,
            currency:'inr',
            receipt_email:token.email
        },{
            idempotencyKey : uuidv4()
        })
        if(payment){
        req.body.transactionId=payment.source.id;
        const booking = new Booking(req.body)
        await booking.save()
        res.status(201).send(booking)
        } else{
            res.status(401).send({message:error.message})
        }
    } catch (error) {
        res.status(409).send({message:error.message})
    }
}

export const getAllBooking = async(req,res)=>{
    try {
        const booking = await Booking.find().populate('car')
        res.status(200).send(booking)
    } catch (error) {
        res.status(409).send({message:error.message})
    }
}