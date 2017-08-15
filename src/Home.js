import React, { Component } from 'react'
import BodyContainer from './body/BodyContainer.js'
import Header from './head/Header.js'
import $ from 'jquery-ajax'
import './Home.css'
let domainName = process.env.DOMAIN_NAME || 'http://localhost:3001'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      userId: '',
      isLoggedIn: false,
      isSignInOpen: false
    }
  }

  toggleSignInModal = () =>{
    this.setState({isSignInOpen: !this.state.isSignInOpen})
    console.log("modal state is", this.state.isSignInOpen);
  }

  handleUserNameChange (event) {
    this.setState({userName: event.target.value})
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    $.ajax({
      method: 'POST',
      url: domainName + '/login',
      data: {
        username: this.state.userName,
        password: this.state.password
      }
    })
    .then((res) => {
      console.log(res, 'User is authenticated')
      this.setState({userId: res._id, isLoggedIn: true})
      this.toggleSignInModal()
    },
    (err) => {
      alert('Your Credentials Are Incorrect')
      this.setState({
        userName: '',
        password: '',
        userId: '',
        isLoggedIn: false
      })
    })
  }

  handleLogOut (event) {
    this.setState({isLoggedIn:false})
  }

  render () {
    return (
      <div className='home'>
        <Header userName={this.state.userName} handleUserNameChange={(event) => this.handleUserNameChange(event)} handlePasswordChange={(event) => this.handlePasswordChange(event)} handleSubmit={(event) => this.handleSubmit(event)}
          handleLogOut={(event) => this.handleLogOut(event)} userId={this.state.userId} isLoggedIn={this.state.isLoggedIn} toggleSignInModal={this.toggleSignInModal} isSignInOpen={this.state.isSignInOpen}/>
        <BodyContainer userId={this.state.userId} isLoggedIn={this.state.isLoggedIn} />
        <div className='col m12' id='banner'>
          <h8 id='copyright'>Copyright (c) 2017 Copyright Holder All Rights Reserved.</h8>
        </div>
      </div>
    )
  }
}

export default Home
