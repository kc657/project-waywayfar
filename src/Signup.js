import React, { Component } from 'react';

class Signup extends Component{
  render(){
    return(
      <div className="row">
        <form className="col m6">
          <div><h5>Sign Up</h5></div>
          <div className="row">
            <div className="input-field col m6">
              <input id="first_name" type="text" className="validate"/>
              <label for="first_name">First Name</label>
          </div>
            <div className="input-field col m6">
              <input id="last_name" type="text" className="validate"/>
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col m12">
              <input id="password" type="password" className="validate"/>
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col m12">
              <input id="email" type="email" className="validate"/>
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col m12">
              <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                <i className="material-icons right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup