import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { MoviesList } from './pages/MoviesList/MoviesList';
import { FavoriteMovies } from './pages/FavoriteMovies/FavoriteMovies';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { withAlert } from 'react-alert'

class App extends Component {
  
  constructor() {
    super();

    this.state = {
    } 
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ MoviesList } />

          <Route exact path="/favorite" component={ FavoriteMovies } />
        </div>
      </BrowserRouter>
    );
  }
}

export default withAlert(App)

library.add(faPlus, faStar, faTrash)