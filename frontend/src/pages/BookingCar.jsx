import { Row,Col, DatePicker, Checkbox, Modal, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import Loading from '../components/Loading'
import { getAllCars } from '../redux/actions/carActions'
import moment from 'moment'
import { bookCar } from '../redux/actions/bookCarAction'
import StripeCheckout from 'react-stripe-checkout';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function BookingCar() {
    const {RangePicker} = DatePicker
    const carId = useParams()
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertReducer)
    const dispatch = useDispatch()
    const [carInfo,setCarInfo] = useState({})
    const [from,setFrom] = useState()
    const [to,setTo] = useState()
    const [totalHours,setTotalHours] = useState(0)
    const [driver,setDriver] = useState(false)
    const [totalAmount,setTotalAmount] = useState(0)
    // const [showModal,setShowModal] = useState(false)
    useEffect(()=>{
        if(cars.length===0){
          dispatch(getAllCars())
        }
        else{
           setCarInfo(cars.find(o=>o._id===carId._id))
        }
    },[cars])
    useEffect(()=>{
        setTotalAmount((carInfo.charge*totalHours))
        if(driver){
            setTotalAmount(totalAmount + (5*totalHours))
        }
    },[driver,totalHours])
   // console.log('total', charges)
    const selectTimeSlot =(value)=>{
        setFrom(moment(value[0]).format('MM DD yyyy HH:mm'))
        setTo(moment(value[1]).format('MM DD yyyy HH:mm'))
        setTotalHours(value[1].diff(value[0],'hours'))
    }
    const onToken=(token)=>{
        const reqObj ={
            token,
            user: JSON.parse(localStorage.getItem('user'))._id,
            car:carInfo._id,
            totalHours,
            driverRequired:driver,
            bookedTimeSlot :{from,to},
            totalAmount
        }
        dispatch(bookCar(reqObj));
    }
  return (
      <DefaultLayout>
       {loading===true && (<Loading/>)}
        <Row>
        <Col lg={8} sm={24} xs={24}>
            <img data-aos="zoom-in-up" data-aos-duration='1500' src={carInfo.img} className='car-image' alt={carInfo.name} />
        </Col>
        <Col lg={12} sm={24} xs={24} className='text-right'>
            {/* <button className='btn mt-2' onClick={()=>setShowModal(true)}>Check Booked Slots</button> */}
            <div className='info'>Car Info</div>
            <div style={{textAlign:'right'}} className='info-below'>
                <h5>{carInfo.name}</h5>
                <p>$ {carInfo.charge} Rent per hour /</p>
                <p>Fuel Type : {carInfo.fuel}</p>
                <p>Max Person : {carInfo.capacity}</p>
            </div>
            <div className="info">Select Time Slot</div>
            <div style={{textAlign:'right',marginLeft:'200px'}} className='info-below'>
            <RangePicker showTime={{format:'HH:mm'}} format='MM DD yyyy HH:mm' onChange={selectTimeSlot}/>
            {from && to && (
                <>
                  <div className="carCharge">
             <p>Total Hours : {totalHours}</p>
             <p>Rent Per Hour : <b>$ {carInfo.charge}</b></p>
             <Checkbox onChange={(e)=>{
                 if(e.target.checked){
                     setDriver(true)
                 }else{
                     setDriver(false)
                 }
             }}>Driver Required</Checkbox>
             <h4>Total Amount :$ {totalAmount}</h4>
             </div>
             <StripeCheckout token={onToken} amount={totalAmount*100} 
             stripeKey="pk_test_51IGGftG9WGGZMzGMI8sFSCw8Eb8nwwfhMkzTZPdBs1QrPmIwPndeNGqfM8OIsgMbGQjrwFXuIGZ0X0rUgEmnn3yL008nBhLoi9" 
             shippingAddress>
             <button className="btn" style={{marginLeft:'300px' ,marginBottom:'20px'}}>Book now</button>
             </StripeCheckout>
             
                </>
            )}
            
            </div>
            
        </Col>
        {/* <Modal visible={showModal} closable={true} footer={false} title='Booked Time Slots'>
            {carInfo && (
                <div className="p-2">
                {
                   carInfo.bookedTimeSlot.map((slot,i)=>{
                     return(
                         <button className='btn mt-2' key={i}>
                             {slot.from} - {slot.to}
                         </button>
                     )
                    })
                }
                <div className="text-right mt-5">
                    <Button type='primary' onClick={()=>setShowModal(false)}>Close</Button>
                </div>
            </div>
            )}
            </Modal> */}
       </Row>
      </DefaultLayout>
  )
}

export default BookingCar