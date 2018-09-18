import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import gapi from 'gapi-client'

gapi.load('client:auth2', initClient);


function initClient() {
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';
    var SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl';
    
    gapi.client.init({
        'apiKey': 'AIzaSyDsgdxW7SfoIYH5X46qOkw2reWJJaoE9zM',
        'discoveryDocs': [discoveryUrl],
        'clientId': '545726823790-1s9atr0g32gl8t311cuafqv5qn3ocqvf.apps.googleusercontent.com',
        'scope': SCOPE
    }).then( () => bootstrapReact() )
}


function bootstrapReact() {
    ReactDOM.render(
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>, 
        document.getElementById('root'));
        registerServiceWorker();
}

const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale',
}