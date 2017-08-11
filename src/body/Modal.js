import React, { Component } from 'react';

class Modal extends Component{
  render(){
    if (!this.props.show){
      return null;
    }

    // MODAL Styles
      // The gray background
      const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
      };

      // The modal "window"
      const modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 700,
        margin: '0 auto',
        padding: 30
      };

    return(
      <div id="createPostModal" className="row" style={backdropStyle}>
        <div className="modal-content" style={modalStyle}>
          <form className="col s12" OnSubmit={this.handleSubmit}>
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
      </div>
    )
  }
}

export default Modal
