import React, { Component } from 'react'

class TopicList extends Component {
  render () {

    let cityTopics = this.props.cities.map(city => {
      console.log(city.name);
      return(

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
<<<<<<< HEAD:src/TopicList.js
          )
      })

    return (
      <div className='container'>
          <div className='row container'>
            { cityTopics[0] }
            { cityTopics[1] }
            { cityTopics[2] }

=======
            <div className='topic-text'>
              Shanghai, Hu for short, is a renowned international metropolis drawing more and more attention from all over the world. Situated on the estuary of Yangtze River, it serves as the most influential economic, financial, international trade, and cultural center in East China.                              </div>
          </div>
          <a href='#'>...read more</a>
>>>>>>> merging-kc:src/body/TopicList.js
        </div>
      </div>
    )
  }
}

export default TopicList
