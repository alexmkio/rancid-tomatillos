import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  return (
    <div className='details-container'>
      <img className='detail-background' src={movie['backdrop_path']} alt=''/>
      <div className='detail-info'>
        <h2 className='detail-title'>{movie.title}</h2>
        <p>Release Date: {movie['release_date']}</p>
        <p>Average User Rating: {movie['average_rating'].toFixed(2)}</p>
        <button className='details-back'>Back</button>
      </div>
    </div>
  )
}

export default MovieDetails;
