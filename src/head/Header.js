import React, { Component } from 'react'
import Signup from './Signup.js'

class Header extends Component {
  constructor(){
    super();
    this.state ={
      showSignup: false
    };
    this.handleOpenSignup = this.handleOpenSignup.bind(this);
    //this.handleCloseSignup = this.handleCloseSignup.bind(this);
  }

  handleOpenSignup () {
    this.setState({ showSignup: true });
  }

  handleCloseModal () {
    this.setState({ showSignup: false });

  }
  render () {
    return (
      <header>
        <nav className='light-blue lighten-1'>
          <a href='#' className='brand-logo'>Way Way Far</a>
          <ul id='navList' className='right hide-on-med-and-down'>
            <li>
              <i className='material-icons'>search</i>
            </li>
            <li><a href='#'>Sign In</a></li>
            <li><a href='#' onclick="this.handleOpenSignup;return false;">Sign up </a></li>
            <Signup
              isOpen={this.state.showModal}
            ></Signup>
            <li><a href='#'>Profile</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
