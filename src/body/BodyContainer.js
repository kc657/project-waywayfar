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
      cities: [],
      selectedCity: ''
    }
    this.handleCitySelect = this.handleCitySelect.bind(this);
  }
  loadCitiesFromServer () {
    $.ajax({
      method: 'GET',
      url: domainName + '/api/cities/'
    })
    .then((res) => {
      this.setState({ cities: res });
      //set itital selectedCity to be the first city in the response
      this.setState({ selectedCity: res[0]._id })
      console.log("AJAX GET- selectedCity is ", this.state.selectedCity)
    }, (err) => {
      console.log('error: ', err)
    })
  }

  componentDidMount () {
    this.loadCitiesFromServer()
  }

  handleCitySelect(event) {
    event.preventDefault();
    let cityId = $(event.target).closest('.click-for-city').data('city-id');
    console.log("handleCitySelect- cityId is ", cityId)
    this.setState( {selectedCity: cityId} );
  }

  render () {
    return (
      <div>
        <Carousel cities={this.state.cities} handleCitySelect={this.handleCitySelect}/>
        <TopicList cities={this.state.cities} handleCitySelect={this.handleCitySelect} />
        <CityListAndShowcase cities={this.state.cities} handleCitySelect={this.handleCitySelect} selectedCity={this.state.selectedCity}/>
      </div>
    )
  }
}

export default BodyContainer
