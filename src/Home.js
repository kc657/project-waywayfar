import React, { Component } from 'react'
import BodyContainer from './body/BodyContainer.js'
import Header from './head/Header.js'
import Signup from './head/Signup.js'
import Modal from './Modal.js'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <Header />
        <BodyContainer />
      </div>
    )
  }
}

export default Home
