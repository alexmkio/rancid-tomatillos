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
      error: "",
    }
  }

  componentDidMount = async () => {
    try {
      let response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
      if(!response.ok) {
        throw new Error(response.status);
      }
      let data = await response.json();
      this.setState({movies: data.movies})
      return;
    }
    catch (e) {
      console.log('e', e.message);
    }
  };

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
