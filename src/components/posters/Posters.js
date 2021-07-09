import React from 'react';
import Poster from '../poster/Poster';
import './Posters.css';

const Posters = ({movies, selectMovie}) => {
  let placeholderIDs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
  const placeholderPosterCards = placeholderIDs.map(number => {
    return (
      <Poster key={number}/>
    )
  })

  let posterCards = []
  if (movies) {
    posterCards = movies.map(movie => {
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
  }

  if (posterCards.length) {
    return (
      <>
        <h2>Featured Films</h2>
        <section className='poster-container'>
          {posterCards}
        </section>
      </>
    )
  }
  return (
    <>
      <h2>Featured Films</h2>
      <section className='poster-container'>
        {placeholderPosterCards}
      </section>
    </>
  )
}

export default Posters;
