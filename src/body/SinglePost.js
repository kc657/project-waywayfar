import React, {Component} from 'react'

class SinglePost extends Component {
  render () {
    return (
      <div>
        {this.props.selectedPosts.map((item, index) => (
          <div className='col s12 card-panel hoverable'>
            <div>
              <div id={item._id} className='col m4'>
                <img className='responsive-img post-img' src={item.image} />
              </div>
              <div className='col m8'>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
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
