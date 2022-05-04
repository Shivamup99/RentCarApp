import React from 'react'
import {Menu,Dropdown} from 'antd'
function DefaultLayout(props) {
  //const userInfo = localStorage.getItem('user')
const menu = (
  <Menu>
    <Menu.Item key='1'>
      <a href='/'>Home</a>
    </Menu.Item>
    <Menu.Item key='2'>
      <a href='/myBookings'>My Bookings</a>
    </Menu.Item>
    <Menu.Item key='3'>
      <a href='/admin'>Admin Page</a>
    </Menu.Item>
    <Menu.Item key='4' onClick={()=>{
      localStorage.removeItem('user')
      window.location.href='/login'
    }}>
      <p>Logout</p>
    </Menu.Item>
  </Menu>
);
  return (
    <>
    <div className='header'>
    <div className="header-wrapper">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXUwNhoC-lvpTdo3hxtu-q23NWqWVrVNAMAeKODDJm3SMp5n9qw1VmBorsVSET4pFKDw&usqp=CAU' 
         alt='name' className='logo-img'/>
         <span>About</span>
         <span>Our Services</span>
         <span>Contact us</span>
         <Dropdown overlay={menu} placement="bottom">
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyH1tE__66LRK8ST_9DovTDsUmN5PC15qoA&usqp=CAU' 
         alt='names' className='profile-logo'/>
        </Dropdown>
    </div>
    </div>
    <div className="content">
        {props.children}
    </div>
    </>
  )
}

export default DefaultLayout