import React, { Component } from 'react';
import Posters from '../posters/Posters';
import MovieDetails from '../movie_details/MovieDetails';
import ErrorCode from '../error_code/ErrorCode';
import { getApiData } from '../../apiCalls';
import { cleanData } from '../../utilities';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      errorCode: null,
      selectedMovie: {}
    }
  }

  componentDidMount = () => {
    this.fetch('movies', 'movies')
  }

  fetch = async (endPoint, property) => {
    try {
      const response = await getApiData(endPoint);
      this.checkForError(response)
      let data = await response.json();
      this.setState({[property]: cleanData(endPoint, data), errorCode: null});
    } catch (e) {
      this.setState({errorCode: e.message});
    }
  }

  checkForError = (response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
  }

  clearSelected = () => {
    this.setState({
      errorCode: null,
      selectedMovie: {}
    });
  }

  render = () => {
    return (
      <>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <main>
          <Route exact path='/' render={() => {
            if (this.state.errorCode) {
              return <ErrorCode code={this.state.errorCode} clearSelected={this.clearSelected}/>
            } else if (!this.state.movies.length) {
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
              />
            }
          }}/>
        </main>
      </>
    )
  }
}

export default App;
