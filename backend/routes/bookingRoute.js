import express from 'express'
import { bookingCar,getAllBooking } from '../controller/bookingController.js'
const router = express.Router()

router.post('/booking/car',bookingCar)
router.get('/booking/car',getAllBooking)

export default router