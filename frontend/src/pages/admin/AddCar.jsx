import { Col, Form, Input, Row } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../../components/DefaultLayout'
import Loading from '../../components/Loading'
import { addACar } from '../../redux/actions/carActions'

function AddCar() {
  const {loading} = useSelector(state=>state.alertReducer)

  const dispatch = useDispatch()
  const onFinish =(value)=>{
    dispatch(addACar(value))
  //  console.log(value)
  }
  return (
    <DefaultLayout>
      {loading && (<Loading/>)}
      <Row justify='center pt-3 pb-3'>
        <Col lg={14} sm={24}>
          <Form className='addcar p-2' layout='vertical' onFinish={onFinish}>
          <h1>Add New Car</h1>
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
            <button className='btn'>Add Car</button>
          </div>
          </Form>
          
        </Col>
      </Row>
    </DefaultLayout>
  )
}

export default AddCar