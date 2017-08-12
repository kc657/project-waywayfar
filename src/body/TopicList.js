import React, { Component } from 'react'

class TopicList extends Component {
  render () {
    let cityTopics = this.props.cities.map(city => {
      console.log(city.name)
      return (

        <div className='col s12 m4'>
          <div className='topic-title'>
            <h3>{city.name}</h3>
            <img src={city.img_url} alt='city image' />
          </div>
          <div className='topic-text'>
            {city.description}
          </div>
          <a href='#'>...read more</a>
        </div>
      )
    })

    return (
      <div className='container'>
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
