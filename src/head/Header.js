import React, { Component } from 'react'
import Modal from './SignupModal.js'

class Header extends Component {
  constructor(){
    super();
    this.state ={
      isOpen: false
      userId: ''
    }
  }

  toggleModal = ()=> {
    this.setState({
      isOpen:!this.state.isOpen
    })
    console.log("modal state is" this.state.isOpen);
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
            <Modal
              isOpen={this.state.showModal}
            />
            <li><a href='#'>Profile</a></li>
          </ul>
        </nav>
        <div className = "modal" show={this.state.isOpen}
        </div>
      </header>
    )
  }
}

export default Header
