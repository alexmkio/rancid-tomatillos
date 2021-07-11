import React from 'react';
import PropTypes from 'prop-types';
import './ErrorCode.css';
import httpResponses from '../../httpResponses';

const ErrorCode = ({code, fetchingMovie, clearSelected}) => {
  let response = httpResponses.find(response => response.code === parseInt(code))
  return (
    <article className='error-container'>
      <div className='error-div'>
        <h2 className='error-h2'>Error {response.code}</h2>
        <h3>{response.message}</h3>
        <p>{response.description}</p>
        {fetchingMovie && <button className='details-back' onClick={clearSelected}>Back</button>}
      </div>
    </article>
  )
}

export default ErrorCode;

ErrorCode.propTypes = {
  code: PropTypes.string.isRequired,
  fetchingMovie: PropTypes.bool.isRequired,
  clearSelected: PropTypes.func.isRequired
};