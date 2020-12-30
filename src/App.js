import './App.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import State from './context/State'
import Main from './components/Main'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <State>
      <BrowserRouter>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='wrapper'>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </State>
  )
}

export default App
