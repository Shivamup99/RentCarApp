import { Col, Form, Input, Row } from 'antd'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DefaultLayout from '../../components/DefaultLayout'
import Loading from '../../components/Loading'
import { editACar, getAllCars } from '../../redux/actions/carActions'
function EditCar() {
  const carId = useParams()
  const {loading} = useSelector(state=>state.alertReducer)
  const {cars} = useSelector(state=>state.carsReducer)
  const dispatch = useDispatch()
  const [car,setCar] = useState()
  const [totalCars,setTotalCars] = useState([])
  
  const onFinish =(value)=>{
      value._id = car._id
    dispatch(editACar(value))
    console.log(value)
  }
  useEffect(()=>{
    if(cars.length===0){
      dispatch(getAllCars())
    }
    else{
        setTotalCars(cars)
       setCar(cars.find(o=>o._id===carId._id))
    }
},[cars])

  return (
    <DefaultLayout>
      {loading && (<Loading/>)}
      <Row justify='center pt-3 pb-3'>
        <Col lg={14} sm={24}>
            {totalCars.length>0 && (
              <Form initialValues={car} className='addcar p-2' layout='vertical' onFinish={onFinish}>
              <h1>Edit Car Details</h1>
              <hr/>
              <Form.Item name='name' label='Car Name' rules={[{required:true, message: 'Please input your car name!',}]}>
                <Input/>
              </Form.Item>
              <Form.Item name='fuel' label='Fuel Type' rules={[{required:true, message: 'Please input your fuel type!',}]}>
                <Input/>
              </Form.Item>
              <Form.Item name='charge' label='Rent Per Hour' rules={[{required:true, message: 'Please input your charges!',}]}>
                <Input/>
              </Form.Item>
              <Form.Item name='capacity' label='Allowed Person' rules={[{required:true, message: 'Please input your person !',}]}>
                <Input/>
              </Form.Item>
              <Form.Item name='img' label='Image Url' rules={[{required:true, message: 'Please input your car img url!',}]}>
                <Input/>
              </Form.Item>
              <div className="text-right">
                <button className='btn'>Edit Car</button>
              </div>
              </Form>
            )}
          
          
        </Col>
      </Row>
    </DefaultLayout>
  )
}

export default EditCar