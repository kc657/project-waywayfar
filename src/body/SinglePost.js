import React, {Component} from 'react'

class SinglePost extends Component {
  render () {
    return (
      <div>
        {this.props.allPosts.map((item, index) => (
          <div className='col s12 card-panel hoverable'>
            <div data-post-id={item._id} className='individualPost'>
              <div id={item._id} className='col m3'>
                <img className='responsive-img post-img' src={item.image} />
              </div>
              <div className='col m7'>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
              <div className='col m2 right'>
                <button type='delete' onClick={this.props.handleDelete} className='singlePostfunctions waves-effect waves-red btn-sm btn-flat'>Delete</button>
                <button className='singlePostfunctions waves-effect waves-teal btn-sm btn-flat hoverable'>Edit</button>
              </div>
            </div>
          </div>
        )
      )}
      </div>
    )
  }
}

export default SinglePost
