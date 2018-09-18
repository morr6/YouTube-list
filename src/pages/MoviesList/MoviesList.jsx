import React, {Component} from 'react';
import { MainContainer, Movies, FavoriteButton,DemoMovies } from './MoviesList.s';
import { Menu } from '../components/Menu/Menu.jsx';
import { Movie } from './components/Movie/Movie';
import * as LocalStorage from '../../youtubeApi/LocalStorage'
import {demoMovies} from './demoMovies'

export class MoviesList extends Component {

    constructor() {
        super();

        this.state = {
            movies: {},
            showFavorite: false
        }
    }

    loadMovies() {
        this.setState({movies: LocalStorage.getMovies()})
    }

    componentWillMount() { 
        this.loadMovies()
    }

    showFavorite() {
        this.setState({ showFavorite: !this.state.showFavorite })
        this.loadMovies()   
    }

    addDemoMovies() {
        demoMovies()
        this.loadMovies()
    }

    render() {
        return (
            <MainContainer>
                <Menu loadMovies={ () => this.loadMovies() } />
                <Movies>
                    <FavoriteButton onClick={ () => this.showFavorite() }> 
                        { this.state.showFavorite ? 
                            'show all movies' : 'show favorite movies'
                        }
                    </FavoriteButton>

                    <DemoMovies onClick={ () => this.addDemoMovies() }>
                        add 10 demo movies
                    </DemoMovies>

                    {   !this.state.showFavorite ?
                        this.state.movies.map((movie,key) => 
                            <Movie 
                                key={key} 
                                movie={movie}
                                loadMovies={ () => this.loadMovies() } 
                            />
                        ) :
                        this.state.movies.map((movie,key) => 
                            movie.favorite &&
                            <Movie 
                                key={key} 
                                movie={movie}
                                loadMovies={ () => this.loadMovies() } 
                            />
                        )               
                    }


                </Movies>
            </MainContainer>
        )
    }
}