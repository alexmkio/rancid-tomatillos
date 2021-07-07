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
    }
  }

  render() {
    return(
      <main>
        <h1>I am App</h1>
        <Posters movies={this.state.movies}/>
        <MovieDetails />
      </main>
    )
  }
}

export default App;