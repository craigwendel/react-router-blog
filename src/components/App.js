import React, { Component } from 'react'
import '../styles/App.css'
import {Link} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className="jumbotron">
          <h1 className="display-3">Welcome to Craig's Blog</h1>
          <p className="lead">This is a place where people can connect and express their thoughts. Anything goes on this blog site, so if you're sensitive you should just leave.</p>
          <hr className="my-4" />
          <p>Have somthing on your mind? Click the button below to Create a Post!</p>
          <p className="lead">
            <Link to='/create' className="btn btn-primary btn-lg" role="button">Create a post!</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default App
