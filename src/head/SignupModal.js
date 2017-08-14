import React, { Component } from 'react'

let domainName = process.env.DOMAIN_NAME || 'http://localhost:3001'

class SignupModal extends Component {
  constructor (props) {
    super(props)
    this.state ={
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    }
  }
  handleFirstNameChange = (event) => {
    this.setState({firstName: event.target.value})
  }
  handleLastNameChange = (event) => {
    this.setState({lastName: event.target.value})
  }
  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  render () {
    if
    (!this.props.show) {
      return null
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    }

      // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 500,
      margin: '0 auto',
      padding: 30
    }


    return (
      <div className='row' id='signupModal' style={backdropStyle}>
        <div className='modal-content' style={modalStyle}>
          <form className='col m6' onSubmit={this.handleSubmit}>
            <div><h5>Sign Up</h5></div>
            <div className='row'>
              <div className='input-field col m6'>
                <input id='firstName' type='text' className='validate' onChange={this.handleFirstNameChange} />
                <label for='firstName'>First Name</label>
              </div>
              <div className='input-field col m6'>
                <input id='lastName' type='text' className='validate' onChange={this.handleLastNameChange} />
                <label for='lastName'>Last Name</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col m12'>
                <input id='password' type='password' className='validate'
                  onChange={this.handlePasswordChange}/>
                <label for='password'>Password</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col m12'>
                <input id='email' type='email' className='validate' onChange={this.handleEmailChange} />
                <label for='email'>Email</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col m12'>
                <button className='btn waves-effect waves-light right' type='submit' name='action'>Submit
                <i className='material-icons right' />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupModal
