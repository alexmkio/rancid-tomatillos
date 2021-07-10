import React, { Component } from 'react';
import Posters from '../posters/Posters';
import MovieDetails from '../movie_details/MovieDetails';
import ErrorCode from '../error_code/ErrorCode';
import { getApiData } from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      errorCode: null,
      selectedMovie: null,
      fetchingMovie: null
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

  selectMovie = async (event) => {
    try {
      this.setState({fetchingMovie: true});
      const match = await getApiData(`movies/${event.target.id}`);
      window.scrollTo(0,0);
      this.setState({selectedMovie: match.movie});
    } catch (e) {
      this.setState({errorCode: e.message})
    }
  }

  clearSelected = () => {
    this.setState({errorCode: null, selectedMovie: null, fetchingMovie: null});
  }

  render() {
    return(
      <>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <main>
        {this.state.errorCode && !this.state.fetchingMovie && <ErrorCode code={this.state.errorCode}/>}
        {this.state.errorCode && this.state.fetchingMovie && <ErrorCode code={this.state.errorCode} fetchingMovie={this.state.fetchingMovie} clearSelected={this.clearSelected}/>}
        {!this.state.errorCode && !this.state.movies.length && <Posters />}
        {this.state.movies.length && !this.state.selectedMovie && <Posters movies={this.state.movies} selectMovie={this.selectMovie}/>}
        {this.state.selectedMovie && <MovieDetails movie={this.state.selectedMovie} clearSelected={this.clearSelected}/>}
      </main>
      </>
    )
  }
}

export default App;
