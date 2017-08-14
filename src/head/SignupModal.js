import React, { Component } from 'react'
import $ from 'jquery-ajax'

let port = process.env.API_PORT || 3001

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      first_name: '', last_name: '',
      username: '', password: '', email_address: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    let first_name = this.state.first_name
    let last_name = this.state.last_name
    // let username = this.state.username;
    let password = this.state.password
    let email_address = this.state.email_address

    console.log(this.state.username)
    $.ajax({
      method: 'POST',
      url: `http://localhost:3001/signup`, // `port + /signup`,
      data: {
        first_name: first_name,
        last_name: last_name,
        password: password,
        email_address: email_address
        // _city: {type: Schema.Types.ObjectId, ref: 'City'}
      }
    })
    .then(res => {
      console.log('resend is: ', res)
      // browserHistory.push('/login');
    }, err => {
      console.log(err)
    })
  }
  handleUsernameChange (e) {
    this.setState({username: e.target.value})
  }
  handlePasswordChange (e) {
    this.setState({password: e.target.value})
  }
  render () {
    return (
      <div className='row'>
        <form className='col m6' onSubmit={this.handleSubmit}>
          <div><h5>Sign Up</h5></div>
          <div className='row'>
            <div className='input-field col m6'>
              <input id='first_name' type='text' className='validate' />
              <label for='first_name'>First Name</label>
            </div>
            <div className='input-field col m6'>
              <input id='last_name' type='text' className='validate' />
              <label for='last_name'>Last Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col m12'>
              <input id='password' type='password' className='validate' />
              <label for='password'>Password</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col m12'>
              <input id='email' type='email' className='validate' />
              <label for='email'>Email</label>
            </div>
          </div>
          {/*
            THIS IS FOR CITY
          <div className='row'>
            <div className='input-field col m12'>
              <input id='city' type='text' className='validate' />
              <label for='city'>City</label>
            </div>
          </div>
          */}

          <div className='row'>
            <div className='input-field col m12'>
              <button className='btn waves-effect waves-light right' type='submit' name='action'>Submit
                <i className='material-icons right' />
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Modal
