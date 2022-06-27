import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTv from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutLineIcon from '@mui/icons-material/PersonOutline';
import './Header.css'

function Header(props) {
    return  <div className="header">
    <div className="header__icons">
      <div className="header__icon header__icon--active">
        <HomeIcon />
        <p>Home</p>
      </div>
      <div className="header__icon">
        <FlashOnIcon />
        <p>Trending</p>
      </div>
      <div className="header__icon">
        <LiveTv />
        <p>Verified</p>
      </div>
      <div className="header__icon">
        <VideoLibraryIcon />
        <p>Collections</p>
      </div>
      <div className="header__icon">
        <SearchIcon />
        <p>Search</p>
      </div>
      <div className="header__icon">
        <PersonOutLineIcon />
        <p>Account</p>
      </div>
    </div>

    <img
      src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
      alt="Hulu Logo"
    />
  </div>;
}

export default Header;