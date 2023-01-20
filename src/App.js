import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
import FeedWidgets from './FeedWidgets'
import Login from './Login';
import {useSelector} from 'react-redux';
import { selectuser } from './features/user/userSlice';

function App() {

  const user = useSelector(selectuser);

  return (
    <div className="app">
      <Header />

      {user ? 
        <div className='app__body'>
          <SideBar/>
          <Feed />
          <FeedWidgets />
        </div>
        :
        <Login />
    }


    </div>
  );
}

export default App;
