import React, { Component } from 'react';
import Posters from '../posters/Posters';
import MovieDetails from '../movie_details/MovieDetails';
import movieData from '../../movieData';
import { getApiData } from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      errorCode: null,
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedMovies = await getApiData('movies');
      this.setState({movies: fetchedMovies.movies});
    } catch (e) {
      this.setState({errorCode: e.message})
    }
  }

  render() {
    return(
      <>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <main>
        <Posters movies={this.state.movies}/>
        <MovieDetails />
      </main>
      </>
    )
  }
}

export default App;
