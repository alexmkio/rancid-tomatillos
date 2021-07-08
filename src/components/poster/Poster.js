import React from 'react';
import './Poster.css';

const Poster = (props) => {
  return (
    <div>
      <img className='poster-image' src={props.photo}/>
    </div>
  )
}

export default Poster;
