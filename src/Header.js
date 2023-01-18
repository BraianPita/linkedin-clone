import React from 'react'
import './Header.css'



// Icons
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/HomeRounded';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

function Header() {
  return (
    <div className='header'>
        <div class="header__left">
            <img src="linkedin.png" alt="Logo"/>
            <div class="header__search">
                {/*  Search Icon */}
                <SearchIcon />
                
                <input type="text" placeholder='Search' />
            </div>
        </div>

        <div class="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={GroupIcon} title="My Network"/>
            <HeaderOption Icon={WorkIcon} title="Jobs"/>
            <HeaderOption Icon={TextsmsIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption Icon={AccountCircleIcon} title="Me"/>

            <div className='vertical__separator'></div>

            <HeaderOption Icon={AppsIcon} title="Work"/>
            <HeaderOption Icon={OndemandVideoIcon} title="Learning"/>
        </div>
    </div>
  )
}

export default Header