import React from 'react'
import './SideBar.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { KeyboardArrowUp } from '@mui/icons-material';

const hashtags = ["programming", "engineering", "datascience", "webdevelopment"]

const StatItem = ({item, value}) => (
  <div className='sidebar__stats'>
      <p>{item}</p>
      <p>{value}</p>
  </div>
);

const Hashtag = ({text}) => (
  <div className='sidebar__hashtag'>
    {text}
  </div>
);

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

            <div className="horizontal__separator" />

            <StatItem item="Connections" value={57} />
            <StatItem item="Visits" value={352} />
            <br />

        </div>

        <div className="sidebar__bottom">
            <div className='sidebar__dropdown'>
              <div><p>Recent</p> <button><KeyboardArrowUp /></button></div>
              <ul>
                {hashtags.map(value => (
                 <li><Hashtag text={value} /></li> 
                ))}
              </ul>
            </div>
        </div>
        
    </div>
  )
}

export default SideBar