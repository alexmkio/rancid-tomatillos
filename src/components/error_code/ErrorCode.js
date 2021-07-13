import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ErrorCode.css';
import httpResponses from '../../httpResponses';

const ErrorCode = ({code, clearSelected}) => {
  let response = httpResponses.find(response => response.code === parseInt(code))
  return (
    <article className='error-container'>
      <div className='error-div'>
        <h2 className='error-h2'>Error {response.code}</h2>
        <h3>{response.message}</h3>
        <p>{response.description}</p>
        <Link to='/'>
          <button className='details-back' onClick={clearSelected}>Back</button>
        </Link>
      </div>
    </article>
  )
}

export default ErrorCode;

ErrorCode.propTypes = {
  code: PropTypes.string.isRequired,
  clearSelected: PropTypes.func
};