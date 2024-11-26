import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from "aws-amplify"

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.REACT_APP_USERPOOLID,
      userPoolClientId:  process.env.REACT_APP_USERPOOL_CLIENTID,
    }     
  },
  API: {
    GraphQL: {
      endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT,
      region: process.env.REACT_APP_GRAPHQL_REGION,
      defaultAuthMode: process.env.REACT_APP_GRAPHQL_DEFAULT_AUTHMODE,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
