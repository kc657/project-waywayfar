import React, { Component } from 'react';
import BodyContainer from './BodyContainer.js';
import Header from './Header.js';
import './Home.css';

class Home extends Component {
  render(){
    return (
      <div className="home">
        <Header />
        <BodyContainer />
      </div>
    )
  }
}

export default Home
