import glamorous from 'glamorous';

export const MovieWrapper = glamorous.div(props => ({
    height: '300px',
    width: '400px',
    float: 'left',
    margin: '1.9%',
    marginTop: '5%',
    color: 'white',
    textAlign: 'left',
    position: 'relative'
}))

export const MovieTitle = glamorous.div(props => ({
    margin: '2%'
}))

export const ChannelName = glamorous.div(props => ({
    marginTop: '5%',
    fontSize: '13px',
    color: 'grey'
}))

export const ViewCount = glamorous.div(props => ({
    marginTop: '4px',
    fontSize: '13px',
    color: 'grey'
})) 

export const LikeCount = glamorous.div(props => ({
    marginTop: '4px',
    fontSize: '13px',
    color: 'grey'
}))


export const AddToFavorite = glamorous.div(props => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    width: '40px',
    fontSize: '20px',
    position: 'absolute',
    left: '85%',
    top: '90%',
    cursor: 'pointer'
}))

export const DeleteMovie = glamorous.div(props => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    height: '40px',
    width: '40px',
    position: 'absolute',
    left: '70%',
    top: '90%',
    cursor: 'pointer'
}))