import React from 'react';
import './Nav.css'

function Nav(props) {
    return (
        <div className='nav'>
            <h2>Trending</h2>
            <h2>Top Rated</h2>
            <h2>Action</h2>
            <h2>Comdey</h2>
            <h2>Horror</h2>
            <h2>Mystery</h2>
            <h2>Sci-Fi</h2>
            <h2>Western</h2>
            <h2>Animation</h2>
            <h2>TV movies</h2>
        </div>
    );
}

export default Nav;