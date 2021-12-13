import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {gql, useQuery} from '@apollo/client'

const elcontenidodegetnotas= gql`
  query{
    getNota{
      content
      date
    }
  }
`

function App() {
  const {data,loading,error} = useQuery(elcontenidodegetnotas)

  if(error) return <span style="color: red">{error}</span>
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {
          loading 
            ? <p>loading...</p>
            : (
              <>
                <p>yo soy el mejor CARAJOOOOO</p>
                {
                  data && data.getNota.map(nota => nota.date).join(', ')
                }
              </>
            )
        }
      </header>
    </div>
  )
}

export default App
