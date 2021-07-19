import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieDetails.css';

class MovieDetails extends Component {
  componentDidMount = () => {
    this.props.fetch(`movies/${this.props.id}`, 'selectedMovie')
  }

  render = () => {
    if (!this.props.movie.title) {
      return (
        <h3>Loading Movie Details</h3>
      )
    } else {
      let movie = this.props.movie;
      let genres = movie.genres.map(genre => <dd key={movie.genres.indexOf(genre)} className='genre'>{genre}</dd>);
      let genre = !movie.genres.length ? null : (
        <>
          <dt>Genre</dt>
          {genres}
        </>
      );
      let runtime = !movie.runtime ? null : (
        <>
          <dt>Runtime</dt>
          <dd>{movie.runtime} minutes</dd>
        </>
      );
      let tagline = !movie.tagline ? null : <dd className='tagline'>"{movie.tagline}"</dd>;
      let budget = movie.budget === '0' ? null : (
        <>
          <dt>Budget</dt>
          <dd>${movie.budget}</dd>
        </>
      );
      let revenue = movie.revenue === '0' ? null : (
        <>
          <dt>Revenue</dt>
          <dd>${movie.revenue}</dd>
        </>
      );
      return (
        <section className='details-container'>
          <img className='detail-background' src={movie.backdrop_path} alt=''/>
          <div className='detail-info'>
            <dl>
              <h2 className='detail-title'>{movie.title}</h2>
              {tagline}
              <dd>{movie.overview}</dd>
              {genre}
              {runtime}
              <dt>Release Date</dt>
              <dd>{movie.release_date}</dd>
              <dt>Average User Rating</dt>
              <dd>{movie.average_rating}</dd>
              {budget}
              {revenue}
            </dl>
            <Link to='/' >
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
  id: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  movie: PropTypes.object,
  clearSelected: PropTypes.func
};
