import React, { Component } from 'react'

class SignupModal extends Component {
  render () {
    if
    (!this.props.isSignUpOpen) {
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
      <div className='row' id='SignupModal' style={backdropStyle}>
        <div className='modal-content' style={modalStyle}>
          <form className='col m12'>
            <div className='row'>
              <div className='col m12 valign-wrapper'>
                <div className='col m11'>
                  <h3>Create Account</h3>
                </div>
                <div className='col m1'>
                  <a onClick={this.props.toggleSignupModal} className='btn-sm waves-light right'>X</a>
                </div>
              </div>
              <div className='input-field col m6'>
                <input data-id-type='signUpFirstName' type='text' className='validate' onChange={this.props.handleChange} />
                <label for='firstName'>First Name</label>
              </div>
              <div className='input-field col m6'>
                <input data-id-type='signUpLastName' type='text' className='validate' onChange={this.props.handleChange} />
                <label for='lastName'>Last Name</label>
              </div>
            </div>
            <div className='input-field col m12'>
              <input data-id-type='signUpUserName' type='text' className='validate' onChange={this.props.handleChange} />
              <label for='userName'>User Name</label>
            </div>
            <div className='row'>
              <div className='input-field col m12'>
                <input data-id-type='signUpPassword' type='password' className='validate'
                  onChange={this.props.handleChange}/>
                <label for='password'>Password</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col m12'>
                <button className='btn waves-effect waves-light right' onClick={this.props.handleSignupSubmit} type='submit' name='action'>Submit
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
