import React, {Component} from 'react'

class SinglePost extends Component {

  render () {
<<<<<<< HEAD
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
=======
    let selectedPosts = this.props.selectedPosts.map( post => {
      return(
        <div className='col s12 card-panel hoverable'>
          <div data-post-id={item._id} className='individualPost'>
        
            <div id={post._id} className='col m4'>
              <img className='responsive-img post-img' src={post.image} />
            </div>
            <div className='col m8'>
              <h5>{post.title}</h5>
              <p>{post.text}</p>
             </div>
             <div className='col m2 right'>
                <button type='delete' onClick={this.props.handleDelete} className="singlePostfunctions waves-effect waves-red btn-sm btn-flat">Delete</button>
                <button className="singlePostfunctions waves-effect waves-teal btn-sm btn-flat hoverable">Edit</button>
>>>>>>> 4ba93421edc42f4b99dcb3c2552d931168384a80
              </div>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div>
        {selectedPosts}
      </div>
    )
  }
}

export default SinglePost
