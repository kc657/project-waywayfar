import React, { Component } from 'react'
import SignupModal from './SignupModal.js'
import SignInModal from './SignInModal.js'

class Header extends Component {
  render () {

    if (!this.props.isLoggedIn){
      return (
        <header>
          <nav className='light-blue lighten-1'>
            <a className='brand-logo'>Way Way Far</a>
            <ul id='navList' className='right hide-on-med-and-down'>
              <li><a onClick={this.props.toggleSignInModal}>Sign In</a></li>
              <li><a onClick={this.toggleModal}>Sign Up</a></li>
            </ul>
          </nav>
          <SignupModal
            show={this.props.isOpen} toggleModal={this.props.toggleSignupModal} handleSignupSubmit={this.props.handleSignupSubmit} handleChange={this.props.handleChange}
          />
          <SignInModal handleUserNameChange={this.props.handleUserNameChange} handlePasswordChange={this.props.handlePasswordChange}
          show={this.props.isSignInOpen}
          handleSubmit={this.props.handleSubmit}
          toggleSignInModal={this.props.toggleSignInModal}
          />
        </header>
      )
    }
    return(
      <header>
        <nav className='light-blue lighten-1'>
          <a className='brand-logo'>Way Way Far</a>
          <ul id='navList' className='right hide-on-med-and-down'>
            <li><a>Welcome {this.props.userName}!</a></li>
            <li><a onClick={this.props.handleLogOut}>Log Out</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
