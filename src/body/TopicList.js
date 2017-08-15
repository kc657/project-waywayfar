import React, { Component } from 'react'

class TopicList extends Component {

  render () {
    let cityTopics = this.props.cities.map(city => {
      return (

        <div className='col s12 m4 click-for-city' data-city-id={city._id} onClick={this.props.handleCitySelect}>
          <div className='topic-title'>
            <h3>{ city.name }</h3>
            <img src={city.img_url} alt={city.name} />
          </div>
          <div className='topic-text'>
            { city.description }
          </div>
          <a>...read more</a>
        </div>
      )
    })

    return (
      <div className='container topics'>
        <div className='row container'>
          { cityTopics[0] }
          { cityTopics[1] }
          { cityTopics[2] }
        </div>
      </div>
    )
  }
}

export default TopicList
