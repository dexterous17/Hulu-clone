import React , {forwardRef} from 'react';
import TextTruncate from 'react-text-truncate';
import './VideoCard.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({movies},ref) => {


    return (
        <div className='videoCard' ref={ref}>
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
})

export default VideoCard;