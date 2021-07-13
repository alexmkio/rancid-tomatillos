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
      movies: [],
      errorCode: null,
      selectedMovie: { id: '' }
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedMovies = await getApiData('movies');
      this.setState({movies: fetchedMovies.movies});
    } catch (e) {
      this.setState({errorCode: e.message});
    }
  }

  selectMovie = async (id) => {
    try {
      const match = await getApiData(`movies/${id}`);
      this.setState({selectedMovie: match.movie});
    } catch (e) {
      this.setState({errorCode: e.message});
    }
  }

  clearSelected = () => {
    this.setState({
      errorCode: null,  
      selectedMovie: { id: '' }, 
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
              } else if (!this.state.movies.length) {
                return <Posters/>
              } else {
                return <Posters movies={this.state.movies}/>
              }
            }}
          />
          <Route exact path='/:id' render={({match}) => {
            if (this.state.errorCode) {
              return <ErrorCode code={this.state.errorCode} clearSelected={this.clearSelected}/>
            } else if (!this.state.selectedMovie) {
              return <MovieDetails />
            } else {
              return <MovieDetails 
                key={this.state.selectedMovie.id} 
                id={parseInt(match.params.id)} 
                movie={this.state.selectedMovie} 
                clearSelected={this.clearSelected}
                selectMovie={this.selectMovie} 
              />
            }
          }}/>
      </main>
      </>
    )
  }
}

export default App;
