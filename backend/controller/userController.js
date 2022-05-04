import User from '../schema/userScema.js'

export const loginUser = async(req,res)=>{
   const {username,password} = req.body
   try {
       const user = await User.findOne({username,password})
       if(user){
           res.send(user)
       }
       else{
           return res.status(400).json('user not find')
       }
   } catch (error) {
       res.status(409).json({message:error.message})
   }
}

export const registerUser = async(req,res)=>{
   try {
       const user = new User(req.body)
       await user.save()
       res.send(user)
   } catch (error) {
       res.status(409).json({message:error.message})
   }
}