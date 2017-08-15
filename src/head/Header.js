import React, { Component } from 'react'
import SignupModal from './SignupModal.js'
import SignInModal from './SignInModal.js'

class Header extends Component {
  constructor(){
    super();
    this.state ={
      isOpen: false,
      isSignInOpen: false
    }
  }

  toggleModal = () =>{
    this.setState( {
      isOpen: !this.state.isOpen
    })
    console.log("modal state is", this.state.isOpen);
  }

  toggleSignInModal = () =>{
    this.setState( {
      isSignInOpen: !this.state.isSignInOpen
    })
    console.log("modal state is", this.state.isSignInOpen);
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
            <li><a onClick={this.toggleSignInModal}>Sign In</a></li>
            <li><a onClick={this.toggleModal}>Sign Up</a></li>
            <li><a>Profile</a></li>
          </ul>
        </nav>
        <SignupModal
          show={this.state.isOpen}
        />
        <SignInModal handleUserNameChange={this.props.handleUserNameChange} handlePasswordChange={this.props.handlePasswordChange}
        show={this.state.isSignInOpen}
        handleSubmit={this.props.handleSubmit}
        />
      </header>
    )
  }
}

export default Header
