import React from 'react';
import TextTruncate from 'react-text-truncate';
import './VideoCard.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function VideoCard({movies}) {

    const base_url = "https://image.tmdb.org/t/p/original";

    return (
        <div className='videoCard'>
            <img src={`${base_url}${movies.backdrop_path || movies.poster_path}`} alt="Movie Poster"/>
            <TextTruncate
                line={1}
                element="p"
                truncateText='...'
                text={movies.overview}
            />
            <h2>{movies.original_title}</h2>
            <p><ThumbUpIcon/>  {movies.vote_count}</p>
        </div>
    );
}

export default VideoCard;