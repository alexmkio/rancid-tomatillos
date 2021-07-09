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
      selectedMovie: null
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
    const match = await getApiData(`movies/${event.target.id}`);
    window.scrollTo(0,0);
    this.setState({ selectedMovie: match.movie });
  }

  clearSelected = () => {
    this.setState({ selectedMovie: null });
  }

  render() {
    if (this.state.errorCode) {
      return(
        <ErrorCode code={this.state.errorCode}/>
      )
    }

    if (!this.state.errorCode && !this.state.movies.length) {
      return(
        <>
          <h1>Loading....</h1>
        </>
      ) 
    }

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
