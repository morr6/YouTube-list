import React, {Component} from 'react';
import {MainContainer, 
        AddInputContaincer,
        AddInput,
        AddButton,
        YTLogoWrapper,
        YTLogoImage,
        DeleteAll } from './Menu.s';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Logo from '../../../assets/images/logo.png'
import * as LocalStorage from '../../../youtubeApi/LocalStorage' 
import * as YoutubeApi from '../../../youtubeApi/api'
import { Alert } from 'react-alert'

export class Menu extends Component {

    constructor() {
        super();

        this.state = {
            movieId: null,
            movie: {}
        }
    }

    deleteAllMovies(alert) {
        LocalStorage.deleteAllMovies() 
        alert.show('all movies deleted') 
        this.props.loadMovies()
    }

    setMovieId() {
        const movieId = this.retrieveId()

        YoutubeApi.handleGetChannelsDataClick( movieId )
        .then((response) => { 
            this.setState({ movie: response.items })
        })  
                
        
    }

    retrieveId(event) {         
        var re1 = /(?<==).*$/g;
        var re2 = /^(?:[^\/]*\/){3}([^\/]*)/;
        var str = event.target.value

        if (re1.test(str)) {
            var myArray = str.match(re1);
            var id = myArray && myArray[0]

            YoutubeApi.handleGetChannelsDataClick(id)
            .then((response) => { 
                this.setState({ movie: response.items })
            })   
        }
        else if (re2.test(str) && !re1.test(str)) {
            var myArray = str.match(re2);
            var id = myArray && myArray[1]

            YoutubeApi.handleGetChannelsDataClick(id)
            .then((response) => { 
                this.setState({ movie: response.items })
            })   
        }
        
        else {
            YoutubeApi.handleGetChannelsDataClick(event.target.value    )
            .then((response) => { 
                this.setState({ movie: response.items })
            }) 
        }
    }

    addMovie(alert) {
        if (this.state.movie[0]) {
            LocalStorage.addMovie(this.state.movie[0].id)
                
            alert.show('movie added')
            this.props.loadMovies()
        }
        else {
            alert.show('movie not found')
        }
    }


    render() {
        return (
            <MainContainer>
                <YTLogoWrapper>
                    <YTLogoImage src={Logo} />
                </YTLogoWrapper>
                <AddInputContaincer>
                    <AddInput onChange={ (event) => this.retrieveId(event) }
                        placeholder='Dodaj' />
                <Alert>
                    {alert => (
                        <AddButton onClick={ () => this.addMovie(alert) } > 
                            <FontAwesomeIcon icon="plus" /> 
                        </AddButton>
                    )}
                </Alert>
                </AddInputContaincer>
                <Alert>
                    {alert => (
                        <DeleteAll onClick={ () => this.deleteAllMovies(alert) }>
                        <FontAwesomeIcon icon='trash' /> 
                    </DeleteAll>
                    )}
                </Alert>
            </MainContainer>
        )
    }
}
