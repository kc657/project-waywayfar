import React, { Component } from 'react'
import SignupModal from './SignupModal.js'

class Header extends Component {
  constructor(){
    super();
    this.state ={
      isOpen: false
    }
  }

  toggleModal = () =>{
    this.setState( {
      isOpen: !this.state.isOpen
    })
    console.log("modal state is", this.state.isOpen);
  }

  render () {
    return (
      <header>
        <nav className='light-blue lighten-1'>
          <a className='brand-logo'>Way Way Far</a>
          <ul id='navList' className='right hide-on-med-and-down'>
            <li>
              <i className='material-icons'>search</i>
            </li>
            <li><a>Sign In</a></li>
            <li><a onClick={this.toggleModal}>Sign up </a></li>
            <li><a>Profile</a></li>
          </ul>
        </nav>
        <SignupModal
          show={this.state.isOpen}
        />
      </header>
    )
  }
}

export default Header
