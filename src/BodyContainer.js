import React, {Component} from 'react'
import Carousel from './Carousel.js'
import TopicList from './TopicList.js'

class BodyContainer extends Component {
  render () {
    return (
      <div>
        <Carousel />
        <TopicList />
      </div>
    )
  }
}

export default BodyContainer
