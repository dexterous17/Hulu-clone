import React from 'react';
import VideoCard from './VideoCard';
import './Results.css'

function Results(props) {
    return (
        <div className='Results'>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    );
}

export default Results;