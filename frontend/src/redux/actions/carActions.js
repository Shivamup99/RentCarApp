import axios from 'axios'
import { message } from 'antd'
export const getAllCars =()=>async dispatch =>{
    dispatch({type:'LOADING',payload:true})
    try {
        const responce = await axios.get('http://localhost:5000/api/data/cars')
        dispatch({type:'GET_ALL_CARS',payload:responce.data})
        dispatch({type:'LOADING',payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
    }
}

export const addACar =(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    try {
        await axios.post('http://localhost:5000/api/data/cars',reqObj)
        dispatch({type:'LOADING',payload:false})
        message.success('Car Added Successfully')
        setTimeout(()=>{
            window.location.href='/admin'
        },500)
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        message.error('Something went wrong , please try later') 
    }
}

export const editACar =(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    try {
        await axios.put('http://localhost:5000/api/data/cars',reqObj)
        dispatch({type:'LOADING',payload:false})
        message.success('Car Edited Successfully')
        setTimeout(()=>{
            window.location.href='/admin'
        },500)
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        message.error('Something went wrong , please try later') 
    }
}

export const deleteACar =(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    try {
        await axios.delete('http://localhost:5000/api/data/cars',reqObj)
        dispatch({type:'LOADING',payload:false})
        message.success('Car deleted Successfully')
        setTimeout(()=>{
            window.location.href='/admin'
        },500)
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING',payload:false})
        message.error('Something went wrong , please try later') 
    }
}