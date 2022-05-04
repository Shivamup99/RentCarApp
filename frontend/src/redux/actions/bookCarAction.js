import axios from 'axios'
import { message } from 'antd'

export const bookCar =(reqObj)=>async dispatch =>{
    dispatch({type:'LOADING',payload:true})
    try {
        await axios.post('http://localhost:5000/api/data/booking/car',reqObj)
        dispatch({type:'LOADING',payload:false})
        message.success('Car Booked Successfully')
        setTimeout(()=>{
            window.location.href='/myBookings'
        },500)
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        message.error('Something went wrong , please try later')
    }
}
export const getAllBookings =()=>async dispatch =>{
    dispatch({type:'LOADING',payload:true})
    try {
        const responce = await axios.get('http://localhost:5000/api/data/booking/car')
        dispatch({type:'GET_ALL_BOOKINGS',payload:responce.data})
        dispatch({type:'LOADING',payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        message.error('Something went wrong , please try later')
    }
}