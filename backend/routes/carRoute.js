import express from 'express'
import { createCar ,deleteCar,getAllCar, updateCar } from '../controller/carController.js';
const router = express.Router()

router.get('/cars',getAllCar);
router.post('/cars',createCar);
router.put('/cars',updateCar);
router.delete('/cars',deleteCar);
export default router;