import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.min.css'
import './App.css';
import Protected from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookingCar from './pages/BookingCar';
import MyBookings from './pages/MyBookings';
import AddCar from './pages/admin/AddCar';
import AdminHome from './pages/admin/AdminHome';
import EditCar from './pages/admin/EditCar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
        <Protected>
          <HomePage/>
        </Protected> }/>
        <Route path='/booking/:_id'
        element={
        <Protected>
          <BookingCar/>
        </Protected>}/>
        <Route path='/myBookings'
        element={
          <Protected>
            <MyBookings/>
          </Protected>
        }/>
        <Route path='/addCar' element={
          <Protected>
            <AddCar/>
          </Protected>
        }/>
        <Route path='/admin' element={
          <Protected>
            <AdminHome/>
          </Protected>
        }/>
        <Route path='/editCar/:_id' element={
          <Protected>
            <EditCar/>
          </Protected>
        }/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
