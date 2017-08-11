import React, { Component } from 'react';

class CreatePost extends Component{
  render(){
    return(
      <div className="row">
        <form className="col s6">
          <div className="row ">
            <h5>Create New Post</h5>
          </div>
          <div className="input-field col s12">
            <select>
            <option value="" disabled selected>Select City</option>
            <option value="1">London</option>
            <option value="2">Sydney</option>
            <option value="3">San Francisco</option>
            <option value="4">Shanghai</option>
            </select>
          </div>
          <div className="input-field col s12">
            <input placeholder="You won't find this anywhere else..." id="post_title" type="text" className="validate"/>
            <label for="post_title">Title</label>
          </div>
          <div className="input-field col s12">
            <textarea id="Description" placeholder="Tell me more..." className="materialize-textarea"></textarea>
            <label for="Description">Description</label>
          </div>
          <div>
            <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
              <i className="material-icons right"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreatePost
