import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-regular-svg-icons'
import {Link} from'react-router-dom'
import Loading from '../components/Loading'
function HomePage() {
  const {cars} = useSelector(state=>state.carsReducer)
  const {loading} = useSelector(state=>state.alertReducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllCars())
  },[])
  return (
    <>
     <DefaultLayout>
       {loading===true &&<Loading/>}
       <div className="max-width homepage">
        <div className="grid-container">
          {cars && cars.map((item)=>{
            return(
              <div className="grid-item" key={item._id}>
                <Link to={`/booking/${item._id}`}><img src={item.img} alt={item.name} className='car-img'/> </Link> 
                <div className="car-info">
                 <span>{item.name}</span> 
                 <p>{item.rating} {<FontAwesomeIcon icon={faStar}/>}</p>
                </div>
               
              </div>
            )
          })}
         
        </div>
       </div>
     </DefaultLayout>
    </>
  )
}

export default HomePage