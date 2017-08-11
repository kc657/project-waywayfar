import React, { Component } from 'react'

class Header extends Component {
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
            <li><a href='#'>Sign up </a></li>
            <li><a href='#'>Profile</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
