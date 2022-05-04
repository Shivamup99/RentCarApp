import React from 'react'
import {Row,Col,Form,Input, Button} from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userRegister } from '../redux/actions/userActions'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function RegisterPage() {
  const dispatch = useDispatch()
  const onFinish=(value)=>{
    dispatch(userRegister(value))
  }
  return (
    <div className='login'>
      <Row gutter={16}>
        <Col lg={14} style={{position:'relative'}}>
          <img data-aos='slide-right' data-aos-duration='1500' src='https://s1.1zoom.me/b5050/782/BUGATTI_La_Voiture_Noire_Side_Black_Black_567142_1920x1080.jpg' alt='djdd' className='login-image'/>
           <h4 style={{marginTop:'-250px'}} className='car-name'>Lamborgini</h4>
        </Col>
        <Col lg={10} className='text left p-5'>
          <Form layout='vertical' className='form p-5' onFinish={onFinish}>
            <h1>Register</h1>
            <hr/>
           <Form.Item name='username' label='Username' rules={[{required:true,message: 'Please input your username!'}]}>
             <Input/>
           </Form.Item>
           <Form.Item name='password' label='Password' rules={[{required:true,message: 'Please input your password!'}]}>
             <Input/>
           </Form.Item>
           <Form.Item name='password' label='Confirm Password' rules={[{required:true,message: 'Please input your confirm password!'}]}>
             <Input/>
           </Form.Item>
           <Button className="btn" role='button' htmlType='submit' >Register</Button>
           <Link to='/login' className='click'>have account ? click here to login</Link>
          </Form>
           
        </Col>
      </Row>
    </div>
  )
}

export default RegisterPage