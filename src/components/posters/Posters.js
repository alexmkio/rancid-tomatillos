import React from 'react';
import Poster from '../poster/Poster';
import './Posters.css';

const Posters = ({movies}) => {
  const posterCards = movies.map(movie => {
    return (
      <Poster />
    )
  })

  return (
    <div>
      <h2>I am Posters</h2>
      {posterCards}
    </div>
  )
}

export default Posters;