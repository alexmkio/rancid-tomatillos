import React, { Component } from 'react';
import Posters from '../posters/Posters';
import MovieDetails from '../movie_details/MovieDetails';
import movieData from '../../movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      selectedMovie: null
    }
  }

  selectMovie = (event) => {
    const match = this.state.movies.find(movie => movie.id === parseInt(event.target.id));
    console.log(match.title)

    this.setState({ selectedMovie: match });
  }

  render() {
    return(
      <>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <main>
        <Posters movies={this.state.movies} selectMovie={this.selectMovie}/>
        <MovieDetails />
      </main>
      </>
    )
  }
}

export default App;
