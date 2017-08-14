import React, { Component } from 'react'

class Modal extends Component {
  render () {
    if (!this.props.show) {
      return null
    }

    return (
      <div id='createPostModal' className='row'>
        <div className='modal-content'>
          <form className='col s12' onSubmit={this.props.handleSubmit}>
            <div className='row'>
              <div className='col s11'>
                <h5>Create New Post</h5>
              </div>
              <div className='col s1'>
                <button onClick={this.props.toggleModal} className='btn-sm waves-light right'>x</button>
              </div>
            </div>
            <div className='input-field col s12'>
              <input required
                id='postTitle'
                type='text'
                className='validate'
                value={this.props.title}
                onChange={this.props.handleTitleChange}
              />
              <label for='post_title'>Title</label>
            </div>
            <div className='input-field col s12'>
              <input
                id='postImage'
                type='text'
                className='validate'
                value={this.props.image}
                onChange={this.props.handleImageChange}
              />
              <label for='post_image'>Insert Image Url</label>
            </div>
            <div className='input-field col s12'>
              <input required
                id='postDescription'
                className='materialize-textarea'
                type='text'
                value={this.props.description}
                onChange={this.props.handleDescriptionChange}
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

export default Modal
