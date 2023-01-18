import React from 'react'
import './SideBar.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function SideBar({accountImg}) {
  return (
    <div className='sidebar'>

        <div className='sidebar__top'>

            <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/07/scrolling-gradient.png?fit=1200%2C600&ssl=1" alt="Profile Background"/>

            {
                accountImg ?
                <img className='sidebar__avatar' src={accountImg} alt="Profile" />
                :
                <AccountCircleIcon fontSize='large' className='sidebar__avatar' />
            }

            <h3>Braian Pita</h3>
            <p>University of Houston - Computer Information Systems</p>

            <div class="horizontal__separator" />

            <p>Connections</p>


        </div>

        <div class="sidebar__bottom">

        </div>
        
    </div>
  )
}

export default SideBar