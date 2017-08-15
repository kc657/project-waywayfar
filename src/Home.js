import React, { Component } from 'react'
import BodyContainer from './body/BodyContainer.js'
import Header from './head/Header.js'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <Header />
        <BodyContainer />
        <div className = 'col m12' id='banner'>
        <h8 id='copyright'>Copyright (c) 2017 Copyright Holder All Rights Reserved.</h8>
        </div>
      </div>
    )
  }
}

export default Home
