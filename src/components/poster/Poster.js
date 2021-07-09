import React from 'react';
import './Poster.css';

const Poster = ({photo, id, title, selectMovie}) => {
  return (
    <div>
      <img
        className='poster-image'
        id={id}
        src={photo}
        alt={title}
        onClick={selectMovie}
      />
    </div>
  )
}

export default Poster;
