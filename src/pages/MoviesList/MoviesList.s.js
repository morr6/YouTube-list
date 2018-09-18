import glamorous from 'glamorous';

export const MainContainer = glamorous.div(props => ({
    height: '100vh',
    width: '100%',
}))

export const Movies = glamorous.div(props => ({ 
    position: 'absolute',
    top: '5%',
    width: '100%',
}))

export const FavoriteButton = glamorous.div(props => ({
    width: '200px',
    height: '40px',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    left: '72.5%',
    margin: '1.75% 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'grey',
    background: '#343434',

    ':active': {
        transition: '.1s',
        background: '#454545'
    }
}))

export const DemoMovies = glamorous.div(props => ({
    width: '200px',
    height: '40px',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    left: '85%',
    margin: '1.75% 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'grey',
    background: '#343434',

    ':active': {
        transition: '.1s',
        background: '#454545'
    }
})) 