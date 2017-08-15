import React, { Component } from 'react'
import BodyContainer from './body/BodyContainer.js'
import Header from './head/Header.js'
import $ from 'jquery-ajax'
import './Home.css'
let domainName = process.env.DOMAIN_NAME || 'http://localhost:3001'


class Home extends Component {
  constructor (props) {
    super(props)
    this.state ={
      userName: '',
      password: ''
    }
  }
  handleUserNameChange(event){
    this.setState({userName: event.target.value})
    console.log(this.state.userName);
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
    console.log(this.state.password);
  }

  // TODO: WHAT KIND OF AJAX?
  handleSubmit(event){
    event.preventDefault()
    $.ajax({
      method: 'POST',
      url: domainName + '/login',
      data: {
        username: this.state.userName,
        password: this.state.password
      }
    })
    .then(res=>{console.log(res, "User is authenticated")})
  }

  render () {
    return (
      <div className='home'>
        <Header handleUserNameChange={(event)=>this.handleUserNameChange(event)}
          handleSubmit={(event)=>this.handleSubmit(event)} handlePasswordChange={(event)=>this.handlePasswordChange(event)}/>
        <BodyContainer />
        <div className = 'col m12' id='banner'>
        <h8 id='copyright'>Copyright (c) 2017 Copyright Holder All Rights Reserved.</h8>
        </div>
      </div>
    )
  }
}

export default Home
