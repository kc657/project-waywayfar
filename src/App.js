import React, { Component } from 'react'
import BodyContainer from './body/BodyContainer.js'
import Header from './head/Header.js'
import $ from 'jquery-ajax'
import './Home.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signUpUserName: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpPassword: '',
      userName: '',
      password: '',
      userId: '',
      isLoggedIn: false,
      isSignInOpen: false,
      isSignUpOpen: false,
    }
  }

  handleChange = (event) => {
    let userInfo = $(event.target).closest('.validate').data('id-type');
    this.setState({[userInfo]: event.target.value})
  }

  toggleSignupModal = () => {
    this.setState({isSignUpOpen: !this.state.isSignUpOpen})
  }

  handleSignupSubmit = (event) => {
    event.preventDefault()
    $.ajax({
      method: 'POST',
      url: 'https://wayfar.herokuapp.com/signup',
      data: {
        first_name: this.state.signUpFirstName,
        last_name: this.state.signUpLastName,
        password: this.state.signUpPassword,
        username: this.state.signUpUserName
      }
    })
    .then((res) => {
      console.log(res)
      this.toggleSignupModal()
    },
    (err) => {
      alert('User already exists')
    })
  }

  toggleSignInModal = () => {
    this.setState({isSignInOpen: !this.state.isSignInOpen})
  }

  handleUserNameChange = (event) => {
    this.setState({userName: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  handleSignInSubmit = (event) => {
    event.preventDefault()
    $.ajax({
      method: 'POST',
      url: 'https://wayfar.herokuapp.com/login',
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

  handleLogOut = (event) => {
    this.setState({isLoggedIn:false})
  }

  render () {
    return (
      <div className='home'>
        <Header handleChange={(event) => this.handleChange(event)} toggleSignInModal={(event) => this.toggleSignInModal(event)} toggleSignupModal={(event)=> this.toggleSignupModal(event)} handleSignupSubmit={(event) => this.handleSignupSubmit(event)} handleUserNameChange={(event) => this.handleUserNameChange(event)} handlePasswordChange={(event) => this.handlePasswordChange(event)} handleSignInSubmit={(event) => this.handleSignInSubmit(event)} handleLogOut={(event) => this.handleLogOut(event)} userId={this.state.userId} userName={this.state.userName} isLoggedIn={this.state.isLoggedIn} isSignInOpen={this.state.isSignInOpen} isSignUpOpen={this.state.isSignUpOpen}/>
        <BodyContainer userId={this.state.userId} isLoggedIn={this.state.isLoggedIn} handleChange={(event => this.handleChange(event))} />
      </div>
    )
  }
}

export default App
