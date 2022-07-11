import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import './Results.css'
import axios from './axios'
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption, {
                headers: {
                    "Accept": "*/*"
                }
            })
            setMovies(request.data.results)
        }
        fetchData();
    }, [selectedOption])

    return (
        <div className='Results'>
            <FlipMove>
                {movies.map((movies =>
                    <VideoCard key={movies.id} movies={movies} />))}
            </FlipMove>
        </div>
    );
}

export default Results;