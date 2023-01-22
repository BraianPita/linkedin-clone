import React, { useEffect } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
import FeedWidgets from './FeedWidgets'
import Login from './Login';
import {useDispatch, useSelector} from 'react-redux';
import { login, logout, selectuser } from './features/user/userSlice';
import { auth } from './features/firebase/firebaseApp';

function App() {

  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        // User logged out
        dispatch(logout());
      }
    })
  }, [dispatch])

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
