import React, { Component } from 'react'

class SignInModal extends Component {
  render () {
    if
    (!this.props.isSignInOpen) {
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
          <form className='row m12' onSubmit={this.props.handleSubmit}>
            <div className='col m12 valign-wrapper'>
              <div className='col m11'>
                <h3>Welcome Back</h3>
              </div>
              <div className='col m1'>
                <a onClick={this.props.toggleSignInModal} className='btn-sm waves-light right'>X</a>
              </div>
            </div>
            <div className='input-field col m6 offset-3'>
              <input data-id-type='userName' type='text' className='validate' onChange={this.props.handleChange} />
              <label for='userName'>User Name</label>
            </div>
            <div className='row'>
              <div className='input-field col m6 offset-3'>
                <input data-id-type='password' type='password' className='validate'
                  onChange={this.props.handleChange} />
                <label for='password'>Password</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col m8 offset-3'>
                <button className='btn waves-effect waves-light right' type='submit' onClick={this.props.handleSignInSubmit} name='action'>Submit
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
