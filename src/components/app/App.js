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
    
    window.scrollTo(0,0);

    this.setState({ selectedMovie: match });
  }

  clearSelected = () => {
    this.setState({ selectedMovie: null });
  }

  render() {
    return(
      <>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <main>
        {!this.state.selectedMovie && <Posters movies={this.state.movies} selectMovie={this.selectMovie}/>}

        {this.state.selectedMovie && <MovieDetails movie={this.state.selectedMovie} clearSelected={this.clearSelected}/>}
      </main>
      </>
    )
  }
}

export default App;
