import React, {Component} from 'react';
import {MovieWrapper,
        MovieTitle,
        ChannelName,
        ViewCount,
        LikeCount,
        DeleteMovie,
        AddToFavorite} from './Movie.s'
import YouTube from 'react-youtube';
import * as LocalStorage from '../../../../youtubeApi/LocalStorage'
import * as YoutubeApi from '../../../../youtubeApi/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from 'react-alert'


export class Movie extends Component {

    constructor() {
        super();

        this.state = {
            movie: null,
            favorite: false,
        }   
    }

    componentWillMount() {
        this.setState({ favorite: this.props.movie.favorite })

        YoutubeApi.handleGetChannelsDataClick(this.props.movie.id) 
        .then((response) => { 
            this.setState({ movie: response.items[0] })
        })
    }

    deleteMovie() {
        LocalStorage.deleteMovie(this.state.movie.id) 
        this.props.loadMovies()
    }

    AddMovieToFavorite(alert) {
        this.setState({ favorite: !this.state.favorite })
        LocalStorage.addToFavorite( this.state.movie.id )
        alert.show( 
            this.state.favorite ? 'deleted from favorite' : 'added to favorite'
        )
        console.log(this.state.movie.id)
    }

    render() {
        console.log(this.state.movie)
        return (
            <div>
                {  this.state.movie && 
                    <MovieWrapper>  
                        <YouTube videoId={this.state.movie.id}
                        opts={playerOptions} /> 
                        <MovieTitle>
                            { this.state.movie.snippet.title }
                        </MovieTitle>
                        <ChannelName>
                            { this.state.movie.snippet.channelTitle }
                        </ChannelName>
                        <ViewCount>
                            { this.state.movie.statistics.viewCount } wyświetleń
                        </ViewCount>
                        <LikeCount>
                            { this.state.movie.statistics.likeCount } polubień <br/>
                            { this.state.movie.snippet.publishedAt } 
                        </LikeCount>

                        <DeleteMovie 
                            onClick={ () => this.deleteMovie() }> 
                            <FontAwesomeIcon icon='trash' /> 
                        </DeleteMovie>
                        
                        <Alert type='success'>
                            {alert => (
                                <AddToFavorite onClick={ () => this.AddMovieToFavorite(alert) }>
                                <FontAwesomeIcon 
                                    icon='star' 
                                    style={{
                                        color: this.state.favorite ? 'yellow' : 'white'
                                    }}
                                /> 
                            </AddToFavorite>
                            )}
                        </Alert>

                    </MovieWrapper>
                }
            </div>
        )
    }
}

const playerOptions = {
    height: '70%',
    width: '100%'
}

