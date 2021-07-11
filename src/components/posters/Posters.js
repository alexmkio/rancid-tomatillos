import React from 'react';
import PropTypes from 'prop-types';
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

  return (
    <>
      <h2>Featured Films</h2>
      <section className='poster-container'>
        {posterCards.length ? posterCards : placeholderPosterCards}
      </section>
    </>
  )
}

export default Posters;

Posters.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  selectMovie: PropTypes.func
};