import React, {Component} from 'react'
import Carousel from './Carousel.js'
import TopicList from './TopicList.js'
import CityListAndShowcase from './CityListAndShowcase.js'
import $ from 'jquery-ajax'

let domainName = process.env.DOMAIN_NAME || 'http://localhost:3001'

class BodyContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cities: []
    }
  }
  loadCitiesFromServer () {
    $.ajax({
      method: 'GET',
      url: domainName + '/api/cities/'
    })
    .then((res) => {
      this.setState({ cities: res })
      console.log('ajax GET cities response: ', res)
      console.log('this.state.cities', this.state.cities)
    }, (err) => {
      console.log('error: ', err)
    })
  }

  componentDidMount () {
    this.loadCitiesFromServer()
  }

  render () {
    return (
      <div>
        <Carousel cities={this.state.cities} />
        <TopicList cities={this.state.cities} />
        <CityListAndShowcase cities={this.state.cities} />
      </div>
    )
  }
}

export default BodyContainer
