import React, { Component } from 'react'

class PostModal extends Component {
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
      <div id='createPostModal' className='row' style={backdropStyle}>
        <div className='modal-content' style={modalStyle}>
          <form className='col s12' onSubmit={this.props.handleSubmit}>
            <div className='row'>
              <div className='valign-wrapper'>
                <div className='col s11'>
                  <h5>Create Post</h5>
                </div>
                <div className='col s1'>
                  <a onClick={this.props.toggleModal} className='btn-sm waves-light right'>x</a>
                </div>
              </div>
            </div>
            <div className='input-field col s12'>
              <input required
                data-id-type='title'
                id='postTitle'
                type='text'
                className='validate'
                value={this.props.title}
                onChange={this.props.handleChange}
              />
              <label for='post_title'>Title</label>
            </div>
            <div className='input-field col s12'>
              <input
                data-id-type='image'
                id='postImage'
                type='text'
                className='validate'
                value={this.props.image}
                onChange={this.props.handleChange}
              />
              <label for='post_image'>Insert Image Url</label>
            </div>
            <div className='input-field col s12'>
              <input required
                data-id-type='description'
                id='postDescription'
                type='text'
                className='validate'
                value={this.props.description}
                onChange={this.props.handleChange}
              />
              <label for='Description'>Description</label>
            </div>
            <div>
              <button
                className='btn waves-effect waves-light right' type='submit' name='action'>Submit
                <i className='material-icons right' />
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PostModal
