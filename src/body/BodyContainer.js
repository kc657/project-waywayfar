import React, {Component} from 'react'
import Carousel from './Carousel.js'
import TopicList from './TopicList.js'
import CityListAndShowcase from './CityListAndShowcase.js'
import AllTitles from './AllTitles.js'

class BodyContainer extends Component {
  render () {
    return (
      <div>
        <Carousel />
        <TopicList />
        <CityListAndShowcase />
      </div>
    )
  }
}

export default BodyContainer
