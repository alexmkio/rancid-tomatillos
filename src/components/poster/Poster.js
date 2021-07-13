import React from 'react';
import PropTypes from 'prop-types';
import './Poster.css';

const Poster = ({photo, id, title }) => {
  if (photo) {
    return (
      <article>
        <img
          className='poster-image'
          id={id}
          src={photo}
          alt={title}
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

Poster.propTypes = {
  photo: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  selectMovie: PropTypes.func
};