import React from 'react'
import UserDashboard from '../../modules/UserDashboard/UserDashboard'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import mentor8 from '../../assets/mentor_pics/08.jpg';
import HomeIcon from '@mui/icons-material/Home';
import './Dashboard.css'
import DashHome from './DashHome';
import { Link } from '@mui/material';
import DashMessage from './DashMessage';
import Bookings from './Bookings';

function Dashboard() {
  return (
    <div>
      <DashboardHeader/>
      <div className='dash_body'>
        <aside className='sidebar'>
        <div className='side_bar_item profile'> <img className='mentor_dash_img' src={mentor8} alt="mentor pic" />
          <h3>Alena Cruise</h3></div>
          <Link to='/userDashboard/home'><div className='side_bar_item'><HomeIcon fontSize='large'/><p className='side_text'>Home</p></div></Link> 
          <Link to='/userDashboard/message'><div className='side_bar_item'> <HomeIcon fontSize='large'/><p className='side_text'>Messages</p></div></Link>
          <Link><div className='side_bar_item'><HomeIcon fontSize='large'/><p className='side_text'>Booking</p></div></Link>  
        </aside>
        {/* <DashHome /> */}
        {/* <DashMessage /> */}
        <Bookings />
      </div>
      
    </div>
  )
}

export default Dashboard