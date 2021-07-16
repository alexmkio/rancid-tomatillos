import React, { Component } from 'react';
import Posters from '../posters/Posters';
import MovieDetails from '../movie_details/MovieDetails';
import ErrorCode from '../error_code/ErrorCode';
import { getApiData } from '../../apiCalls';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      errorCode: null,
      selectedMovie: null
    }
  }

  componentDidMount = async () => {
    this.fetch('movies')
  }
  
  fetch = async (endPoint) => {
    try {
      if (endPoint.includes('/')) {
        let fetchedMovie = await getApiData(endPoint)
        this.setState({selectedMovie: fetchedMovie.movie})
      } else {
        let fetchedMovies = await getApiData(endPoint)
        this.setState({movies: this.cleanData(endPoint, fetchedMovies)})
      }
    } catch (e) {
      this.setState({errorCode: e.message});
    }
  }

  cleanData = (urlEndPoint, data) => {
    if (urlEndPoint.includes('/')) {
      
    } else {
      return data.movies.map(movie => {
        return {id: movie.id, 
                poster_path: movie.poster_path, 
                title: movie.title}
      })
    }
  }

  clearSelected = () => {
    this.setState({
      errorCode: null,
      selectedMovie: null 
    });
  }

  render() {
    return(
      <>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <main>
        <Route exact path='/' render={() => {
          if (this.state.errorCode) {
            return <ErrorCode code={this.state.errorCode} clearSelected={this.clearSelected}/>
          } else if (!this.state.movies) {
            return <Posters/>
          } else {
            return <Posters movies={this.state.movies}/>
          }
        }}/>
        <Route exact path='/:id' render={({match}) => {
          if (this.state.errorCode) {
            return <ErrorCode code={this.state.errorCode} clearSelected={this.clearSelected}/>
          } else if (!this.state.selectedMovie) {
            return <MovieDetails 
              id={match.params.id} 
              fetch={this.fetch} 
            />
          } else {
            return <MovieDetails 
              id={match.params.id} 
              movie={this.state.selectedMovie} 
              clearSelected={this.clearSelected}
              fetch={this.fetch} 
              state={this.state}
            />
          }
        }}/>
      </main>
      </>
    )
  }
}

export default App;
