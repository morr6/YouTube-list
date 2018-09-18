import gapi from 'gapi-client'

export const  handleGetChannelsDataClick = (movieId) => {
    var request = gapi.client.request({
        'method': 'GET',
        'path': 'https://www.googleapis.com/youtube/v3/videos',
        'params': {'part': 'snippet, statistics', 'id': movieId}
    });
    
    if (request) {
        return new Promise(function(resolve, reject) {
            request.execute(response => resolve(response));
        })
    }
    else { return null }

}