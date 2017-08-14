import React, { Component } from 'react'
import BodyContainer from './body/BodyContainer.js'
import Header from './head/Header.js'
import Modal from './body/Modal.js'
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
