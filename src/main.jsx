import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ApolloClient,HttpLink, InMemoryCache, ApolloProvider} from '@apollo/client'


const cliente = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:'http://localhost:4001/graphql'
  })
})


ReactDOM.render(
  <ApolloProvider client={cliente}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
