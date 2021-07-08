import React from 'react';
import Poster from '../poster/Poster';
import './Posters.css';

const Posters = ({movies, selectMovie}) => {
  const posterCards = movies.map(movie => {
    return (
      <Poster
        key={movie.id}
        id={movie.id}
        photo={movie['poster_path']}
        title={movie.title}
        selectMovie={selectMovie}
      />
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
