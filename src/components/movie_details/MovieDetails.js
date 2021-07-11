import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie, clearSelected }) => {
  const genres = movie.genres.map(genre => <dd key={movie.genres.indexOf(genre)} className='genre'>{genre}</dd>);
  const tagline = !movie.tagline ? null : <dd>"{movie.tagline}"</dd>;

  return (
    <section className='details-container'>
      <img className='detail-background' src={movie['backdrop_path']} alt=''/>
      <div className='detail-info'>
        <dl>
          <h2 className='detail-title'>{movie.title}</h2>
          {tagline}
          <dd>{movie.overview}</dd>
          <dt>Genre</dt>
          {genres}
          <dt>Runtime</dt>
          <dd>{movie.runtime} minutes</dd>
          <dt>Release Date</dt>
          <dd>{movie['release_date']}</dd>
          <dt>Average User Rating</dt>
          <dd>{movie['average_rating'].toFixed(2)}</dd>
        </dl>
        <button className='details-back' onClick={clearSelected}>Back</button>
      </div>
    </section>
  )
}

export default MovieDetails;
