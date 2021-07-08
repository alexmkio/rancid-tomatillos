import React from 'react';
import Poster from '../poster/Poster';
import './Posters.css';

const Posters = ({movies}) => {
  const posterCards = movies.map(movie => {
    return (
      <Poster key={movie.id} photo={movie['poster_path']}/>
    )
  })

  return (
    <>
      <h2>Featured Films</h2>
      <section className='poster-container'>
        {posterCards}
      </section>
    </>
  )
}

export default Posters;
