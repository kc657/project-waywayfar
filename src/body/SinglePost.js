import React, {Component} from 'react'

class SinglePost extends Component {

  render () {
    let selectedPosts = this.props.selectedPosts.map(post => {
      return (
        <div key={post._id} className='col s12 card-panel hoverable'>
          <divider />
          <div data-post-id={post._id} className='individualPost'>
            <div id={post._id} className='col m4'>
              <img className='responsive-img post-img' src={post.image} alt='' />
            </div>
            <div className='col m8'>
              <h5>{post.title}</h5>
              <p>{post.text}</p>
            </div>
            <div className='col m2 right'>
              <button type='delete' onClick={this.props.handleDelete} className='singlePostfunctions waves-effect waves-red btn-sm btn-flat'>Delete</button>
              <button onClick={this.props.handleEdit} className='singlePostfunctions waves-effect waves-teal btn-sm btn-flat hoverable'>Edit</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        {selectedPosts}
      </div>
    )
  }
}

export default SinglePost
