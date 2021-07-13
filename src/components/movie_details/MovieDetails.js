import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieDetails.css';

class MovieDetails extends Component {
  componentDidMount() {
    this.props.selectMovie(this.props.id);
  }

  render() {
    if (!this.props.movie.id) {
      return (
        <h3>Loading Movie Details</h3>        
      )
    } else {
      let movie = this.props.movie;
      let genres = movie.genres.map(genre => <dd key={movie.genres.indexOf(genre)} className='genre'>{genre}</dd>);
      let tagline = !movie.tagline ? null : <dd className='tagline'>"{movie.tagline}"</dd>;
      let budget = !movie.budget ? null : (
        <>
          <dt>Budget</dt>
          <dd>${movie.budget}</dd>
        </>
      );
      let revenue = !movie.revenue ? null : (
        <>
          <dt>Revenue</dt>
          <dd>${movie.revenue}</dd>
        </>
      );
      return (
        <section className='details-container'>
          <img className='detail-background' src={movie['backdrop_path']} alt=''/>
          <div className='detail-info'>
            <dl>
              <h2 className='detail-title'>{movie.title}</h2>
              {tagline}
              <dd>{movie.overview}</dd>
              <dt>Genre</dt>
              {genres}
              <dt>Runtime</dt>
              <dd>{movie.runtime} minutes</dd>
              <dt>Release Date</dt>
              <dd>{movie['release_date']}</dd>
              <dt>Average User Rating</dt>
              <dd>{movie['average_rating'].toFixed(2)}</dd>
              {budget}
              {revenue}
            </dl>
            <Link to={'/'} >
              <button className='details-back' onClick={this.props.clearSelected}>Back</button>
            </Link>
          </div>
        </section>
      )
    }
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  clearSelected: PropTypes.func.isRequired
};