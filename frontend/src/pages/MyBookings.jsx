import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllBookings } from '../redux/actions/bookCarAction'
import StarRatings from 'react-star-ratings';
import Loading from '../components/Loading'

function MyBookings() {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const {bookings} = useSelector(state=>state.bookingsReducer)
    const {loading} = useSelector(state=>state.alertReducer)
    useEffect(()=>{
        dispatch(getAllBookings())
    },[])
  //  console.log('bookings ' ,bookings)
  return (
   <DefaultLayout>
       <h1 className="text-center ">My Bookings Page</h1>
       {loading && <Loading/>}

       <Row justify='center'>
           <Col lg={20} sm={24}>
               
                   {bookings.filter(o=>o.user===user._id).map((booking)=>(
                       <Row className='mybookinfo' key={booking._id}>
                       <Col  lg={7} sm={24} >
                         <h5><b>{booking.car.name}</b></h5>
                         <p>Total hours : <b>{booking.totalHours}</b></p>
                         <p>Rent Per Hour : <b>$ {booking.car.charge}</b></p>
                         <p>Total Amount : <b>{booking.totalAmount}</b></p>
                       </Col>
                       <Col lg={10} sm={24}>
                        <p>Transaction Id : <b>{booking.transactionId}</b></p>
                        <p>From : <b>{booking.bookedTimeSlot.from}</b></p>
                        <p>To : <b>{booking.bookedTimeSlot.to}</b></p>
                        <div>Rating : 
                        <StarRatings
                          rating={booking.car.rating}
                          starDimension="25px"
                          starSpacing="5px"
                          starRatedColor='orange'
                          />
                        </div>
                       </Col>
                       <Col lg={7} sm={24}>
                        <img src={booking.car.img} alt={booking.car.name} height='150' width='100%'/>
                       </Col>
                       </Row>
                   ))}
           </Col>
       </Row>

   </DefaultLayout>
  )
}

export default MyBookings