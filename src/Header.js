import React, {useState} from 'react';
import './Header.css';
import { logout } from './features/user/userSlice';
import { useDispatch } from 'react-redux';


// Icons
import SearchIcon from '@mui/icons-material/Search';
import {HeaderOption, DropdownHeaderOption} from './HeaderOption';
import HomeIcon from '@mui/icons-material/HomeRounded';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';




function Header() {

  const [meDropped, setMeDropped] = useState(false);
  const dispatch = useDispatch();

  const logoutAction = () => {
    setMeDropped(false);
    dispatch(logout());
  };

  function MeDropdown() {
    console.log(meDropped)
    return (
      <div className={ (meDropped ? "me_dropped " : "") + "me_dropdown"}>
        <p onClick={() => {logoutAction()}}>Logout</p>
      </div>
    );
  } 

  return (
    <div className='header'>
        <div className="header__left">
            <img src="linkedin.png" alt="Logo"/>
            <div className="header__search">
                {/*  Search Icon */}
                <SearchIcon />
                
                <input type="text" placeholder='Search' />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={GroupIcon} title="My Network"/>
            <HeaderOption Icon={WorkIcon} title="Jobs"/>
            <HeaderOption Icon={TextsmsIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <DropdownHeaderOption Icon={AccountCircleIcon} onClick={() => setMeDropped(!meDropped)} Dropdown={MeDropdown} title="Me ⮟"/>

            <div className='vertical__separator'></div>

            <HeaderOption Icon={AppsIcon} title="Work"/>
            <HeaderOption Icon={OndemandVideoIcon} title="Learning"/>
        </div>
    </div>
  )
}

export default Header