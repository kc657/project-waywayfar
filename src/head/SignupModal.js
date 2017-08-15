import React, { Component } from 'react'
import $ from 'jquery-ajax'
let domainName = process.env.DOMAIN_NAME || 'http://localhost:3001'

class SignupModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      firstName: '',
      lastName: '',
      password: ''
    }
  }

  handleChange = (event) => {
    let userInfo = $(event.target).closest('.validate').data('id-type');
    this.setState({[userInfo]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    $.ajax({
      method: 'POST',
      url: domainName + '/signup',
      data: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        password: this.state.password,
        username: this.state.userName
      }
    })
    .then((res) => {
      console.log(res)
      this.props.toggleModal()
    },
    (err) => {
      alert('User already exists')
    })
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
          <form className='col m12'>
            <div className='row'>
              <div className='col m12 valign-wrapper'>
                <div className='col m11'>
                  <h3>Create Account</h3>
                </div>
                <div className='col m1'>
                  <a onClick={this.props.toggleModal} className='btn-sm waves-light right'>X</a>
                </div>
              </div>
              <div className='input-field col m6'>
                <input data-id-type='firstName' type='text' className='validate' onChange={this.handleChange} />
                <label for='firstName'>First Name</label>
              </div>
              <div className='input-field col m6'>
                <input data-id-type='lastName' type='text' className='validate' onChange={this.handleChange} />
                <label for='lastName'>Last Name</label>
              </div>
            </div>
            <div className='input-field col m12'>
              <input data-id-type='userName' type='text' className='validate' onChange={this.handleChange} />
              <label for='userName'>User Name</label>
            </div>
            <div className='row'>
              <div className='input-field col m12'>
                <input data-id-type='password' type='password' className='validate'
                  onChange={this.handleChange}/>
                <label for='password'>Password</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col m12'>
                <button className='btn waves-effect waves-light right' onClick={this.handleSubmit} type='submit' name='action'>Submit
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
