import axios from 'axios'
import { message } from 'antd'
export const userLogin =(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    try {
        const response = await axios.post('http://localhost:5000/api/data/login',reqObj)
        localStorage.setItem('user',JSON.stringify(response.data))
        setTimeout(()=>{
            window.location.href='/'
        },500)
        dispatch({type:'LOADING',payload:false})
        message.success('Successfully Loged in')
    } catch (error) {
        console.log(error)
        message.error('Somthing went wrong')
        dispatch({type:'LOADING',payload:false})
    } 

}

export const userRegister =(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
    try {
        await axios.post('http://localhost:5000/api/data/register',reqObj)
        setTimeout(()=>{
            window.location.href='/login'
        },500)
        dispatch({type:'LOADING',payload:false})
        message.success('Successfully registerd')
    } catch (error) {
        console.log(error)
        message.error('Somthing went wrong')
        dispatch({type:'LOADING',payload:false})
    }

}