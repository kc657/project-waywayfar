import React, { Component } from 'react'

class TopicList extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row container'>
          <div className='col s12 m4'>
            <div className='topic-title'>
              <h3>London</h3>
              <img src='http://i.imgur.com/LziiBHl.jpg' alt='' />
            </div>
            <div className='topic-text'>
              London is the capital of the United Kingdom, a country in western Europe. It is also the capital of England, which is part of the United Kingdom. London lies on the Thames River. It is the largest city in the country.
            </div>
            <a href='#'>...read more</a>
          </div>

          <div className='col s12 m4'>
            <div className='topic-title'>
              <h3>San Francisco</h3>
              <img src='http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg' alt='' />
            </div>
            <div className='topic-text'>
              San Francisco was founded on June 29, 1776, when colonists from Spain established Presidio of San Francisco at the Golden Gate and Mission San Francisco de Asís a few miles away, all named for St. Francis of Assisi. The California Gold Rush of 1849 brought rapid growth, making it the largest city on the West Coast at the time.
            </div>
            <a href='#'>...read more</a>
          </div>

          <div className='col s12 m4'>
            <div className='topic-title'>
              <h3>Shanghai</h3>
              <img src='http://media2.giphy.com/media/YwJHMn7GXkTNS/giphy.gif' alt='' />
            </div>
            <div className='topic-text'>
              Shanghai, Hu for short, is a renowned international metropolis drawing more and more attention from all over the world. Situated on the estuary of Yangtze River, it serves as the most influential economic, financial, international trade, and cultural center in East China.                    </div>
          </div>
          <a href='#'>...read more</a>
        </div>
      </div>
    )
  }
}

export default TopicList
