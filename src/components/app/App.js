import React, { Component } from 'react';
import Posters from '../posters/Posters';
import MovieDetails from '../movie_details/MovieDetails';
import ErrorCode from '../error_code/ErrorCode';
import { getApiData } from '../../apiCalls';
import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      errorCode: null,
      fetchingMovie: null,
      selectedMovie: {}
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

  // selectMovie = async (id) => {
  //   //if a MovieDetails sends an id run
  //   //probs: not being able to read this.state.selectedMovie of null
  //   //infinite loop if fetching movie that's already selected

  //   //if movie is already selected we should return this.state.selectedMovie right?!
  //   if (!this.state.selectedMovie) {
  //     // this.setState({selectedMovie: {id: 'whatever'}});
    
  //   if (this.state.selectedMovie.id === parseInt(id)) {
  //     console.log('BAD')
  //     return this.state.selectedMovie
  //   }
  //   if (this.state.selectedMovie.id !== parseInt(id)) {
  //     try {
  //       console.log('GOOD')
  //       this.setState({fetchingMovie: true});
  //       const match = await getApiData(`movies/${id}`);
  //       window.scrollTo(0,0);
  //       this.setState({selectedMovie: match.movie});
  //     } 
  //     catch (e) {
  //       this.setState({errorCode: e.message})
  //     }
  //   }
  // }

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
        <Route exact path='/' render={() => {
              if (this.state.error) {
                return <ErrorCode error={this.state.error} />
              } else if (!this.state.movies.length) {
                return <Posters />
              } else {
                return <Posters movies={this.state.movies} selectMovie={this.selectMovie}/>
              }
            }}
          />
          <Route exact path='/:id' render={({match}) => {
            const id = parseInt(match.params.id);
            if (this.state.error) {
              return <ErrorCode error={this.state.error} />
            } else if (!this.state.selectedMovie) {
              return <MovieDetails />
            } else {
              return <MovieDetails 
                key={this.state.selectedMovie.id} 
                id={id} 
                movie={this.state.selectedMovie} 
                selectMovie={this.selectMovie} 
                clearSelected={this.clearSelected}
              />
            }
          }}/>
      </main>
      </>
    )
  }

  // render() {
  //   return(
  //     <>
  //     <header>
  //       <h1>Rancid Tomatillos</h1>
  //     </header>
  //     <main>
  //       <Switch>
  //         <Route exact path='/'>
  //           <Posters movies={this.state.movies}/>
  //         </Route>
  //         <Route exact path="/:id" render={({ match }) => {
  //           if (this.state.movies.some(movie => parseInt(movie.id) === parseInt(match.params.id))) {
  //             return <MovieDetails match={match} selectMovie={this.selectMovie} />
  //           }
  //           return <ErrorCode code="404" />
  //         }}/>
  //       </Switch>
  //     </main>
  //     </>
  //   )
  // }
}
// <Route>
//   <MovieDetails movie={this.state.selectedMovie} clearSelected={this.clearSelected}/>
// </Route>

// {this.state.errorCode && !this.state.fetchingMovie && <ErrorCode code={this.state.errorCode}/>}
// {this.state.errorCode && this.state.fetchingMovie && <ErrorCode code={this.state.errorCode} fetchingMovie={this.state.fetchingMovie} clearSelected={this.clearSelected}/>}
// {!this.state.errorCode && !this.state.movies.length && <Posters />}
// {this.state.movies.length && !this.state.selectedMovie && <Posters movies={this.state.movies} selectMovie={this.selectMovie}/>}
// {this.state.selectedMovie && <MovieDetails movie={this.state.selectedMovie} clearSelected={this.clearSelected}/>}
export default App;
