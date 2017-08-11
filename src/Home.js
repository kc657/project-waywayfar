import React, { Component } from 'react';
import BodyContainer from './BodyContainer.js';
import Header from './Header.js';
import Signup from './Signup.js';
import Modal from './Modal.js';
import CityListAndShowcase from './CityListAndShowcase.js';
import './Home.css';

class Home extends Component {
  render(){
    return (
      <div className="home">
        <Header />
        <BodyContainer />
        <Signup />
      </div>
    )
  }
}

export default Home
