import React from 'react';
import './Poster.css';

const Poster = ({photo, id, title, selectMovie}) => {
  if (photo) {
    return (
      <article>
        <img
          className='poster-image'
          id={id}
          src={photo}
          alt={title}
          onClick={selectMovie}
        />
      </article>
    )
  }
  return (
    <div className='poster-image placeholder-height'>
    </div>
  )
}

export default Poster;
