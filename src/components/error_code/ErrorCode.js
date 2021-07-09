import React from 'react';
import './ErrorCode.css';
import httpResponses from '../../httpResponses';

const ErrorCode = ({code}) => {
  let response = httpResponses.find(response => response.code === parseInt(code))
  return (
    <article className='error-container'>
      <div className='error-div'>
        <h2 className='error-h2'>Error {response.code}</h2>
        <h3>{response.message}</h3>
        <p>{response.description}</p>
      </div>
    </article>
  )
}

export default ErrorCode;
