import React, { Component } from 'react';
import Posters from '../posters/Posters';
import MovieDetails from '../movie_details/MovieDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <main>
        <h1>I am App</h1>
        <Posters />
        <MovieDetails />
      </main>
    )
  }
}

export default App;