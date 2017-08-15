import React, { Component } from 'react'
import $ from 'jquery-ajax'
let domainName = process.env.DOMAIN_NAME || 'http://localhost:3001'

class SignInModal extends Component {
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
      minHeight: 340,
      margin: '0 auto',
      padding: 30
    }


    return (
      <div className='row' id='signupModal' style={backdropStyle}>
        <div className='modal-content' style={modalStyle}>
          <form className='col m12'>
            <div className="row m6 offset-6">
              <button onClick={this.props.toggleSignInModal} className='btn-sm waves-light right'>X</button>
              <h3>Welcome Back</h3>
            </div>
            <div className='input-field col m6 offset-3'>
              <input id='userName' type='text' className='validate' onChange={this.props.handleUserNameChange} />
              <label for='userName'>User Name</label>
            </div>
            <div className='row'>
              <div className='input-field col m6 offset-3'>
                <input id='password' type='password' className='validate'
                  onChange={this.props.handlePasswordChange}/>
                <label for='password'>Password</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col m8 offset-3'>
                <button className='btn waves-effect waves-light right' type='submit' onClick={this.props.handleSubmit} name='action'>Submit
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

export default SignInModal
