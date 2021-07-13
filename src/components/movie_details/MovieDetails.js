import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';

class MovieDetails extends Component {
  componentDidMount() {
    console.log('PROPS', this.props)
    this.props.selectMovie(this.props.id);
 }

  render() {
    if (!this.props.movie.id) {
      console.log('No Movie')
    } else {
      console.log('Found 1 movie sir')
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
            <button className='details-back' onClick={this.props.clearSelected}>Back</button>
          </div>
        </section>
      )
    }

    return (
      <div></div>
    )

    
  }
}

export default MovieDetails;

// MovieDetails.propTypes = {
//   movie: PropTypes.exact({
//     average_rating: PropTypes.number,
//     backdrop_path: PropTypes.string,
//     budget: PropTypes.number,
//     genres: PropTypes.array,
//     id: PropTypes.number,
//     overview: PropTypes.string,
//     poster_path: PropTypes.string,
//     release_date: PropTypes.string,
//     revenue: PropTypes.number,
//     runtime: PropTypes.number,
//     tagline: PropTypes.string,
//     title: PropTypes.string,
//   }).isRequired, 
//   clearSelected: PropTypes.func.isRequired
// };