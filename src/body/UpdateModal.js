import React, { Component } from 'react'

class UpdateModal extends Component {
  render () {
    if (!this.props.show) {
      return null
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
      <div id='updatePostModal' className='row' style={backdropStyle}>
        <div className='modal-content' style={modalStyle}>
          <form className='col s12' onSubmit={this.props.handleUpdate} >
            <div className='row'>
              <div className='col s12 valign-wrapper'>
                <div className='col s11'>
                  <h3>Update Post</h3>
                </div>
                <div className='col s1'>
                  <a onClick={this.props.toggleUpdateModal} className='btn-sm waves-light right'>x</a>
                </div>
              </div>
            </div>
            <div className='input-field col s12'>
              <input
                data-id-type='title'
                id='postTitle'
                className='validate'
                type='text'
                onChange={this.props.handleChange}
              />
              <label for='post_title'>Title</label>
            </div>
            <div className='input-field col s12'>
              <input
                data-id-type='image'
                id='postImage'
                className='validate'
                type='text'
                onChange={this.props.handleChange}
              />
              <label for='post_image'>Insert Image URL</label>
            </div>
            <div className='input-field col s12'>
              <input
                data-id-type='description'
                id='postDescription'
                className='validate'
                type='text'
                onChange={this.props.handleChange}
              />
              <label for='Description'>Description</label>
            </div>
            <div>
              <button
                className='btn waves-effect waves-light right' type='submit' name='action'>Submit
                <i className='material-icons right'/>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default UpdateModal
