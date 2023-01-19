import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
import FeedWidgets from './FeedWidgets'

function App() {
  return (
    <div className="app">
      <Header />

      <div className='app__body'>

        <SideBar/>
        <Feed />
        <FeedWidgets />

      </div>


    </div>
  );
}

export default App;
