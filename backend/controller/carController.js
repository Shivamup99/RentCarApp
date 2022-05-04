import carSchema from "../schema/carSchema.js";

export const getAllCar =async(req,res)=>{
    try {
        const car = await carSchema.find();
        res.status(200).json(car)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const createCar = async(req,res)=>{
    const car = new carSchema(req.body);
   // console.log('ram')
    try {
         await car.save();
         res.status(201).json(car)
    } catch (error) {
        res.status(409).json({message:error.message})
    }

} 

export const updateCar = async(req,res)=>{
    try {
        const car = await carSchema.findOne({_id:req.body._id})
        car.name=req.body.name
        car.charge=req.body.charge
        car.capacity=req.body.capacity
        car.fuel=req.body.fuel
        car.img=req.body.img
         await car.save();
         res.status(201).json(car)
    } catch (error) {
        res.status(409).json({message:error.message})
    }

}
export const deleteCar =async (req,res)=>{
    console.log(req.body.carid)
    try {
        await carSchema.findByIdAndDelete({_id:req.body.carid})
        res.status(200).send('deleted successfully')
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}