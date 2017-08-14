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
      selectedCityId: '',
      selectedCityObj: [],
      selectedPosts: [],
    }
    this.handleCitySelect = this.handleCitySelect.bind(this);
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
  }

  loadCitiesFromServer () {
    $.ajax({
      method: 'GET',
      url: domainName + '/api/cities/'
    })
    .then((res) => {
      this.setState({ cities: res });
      //set itital selectedCityId to be the first city in the response
      this.setState({ selectedCityId: res[0]._id })
      console.log("AJAX GET- selectedCityId is ", this.state.selectedCityId)
      this.loadPostsFromServer();
    }, (err) => {
      console.log('error: ', err)
    })
  }

  loadPostsFromServer(){
    $.ajax({
      method: 'GET',
      url: domainName + '/api/cities/' + this.state.selectedCityId + '/posts',
    })
    .then(res => {
      this.setState({ selectedPosts: res.postsByCity });
      console.log("Loaded posts from server ", this.state.selectedPosts);
    });
  }

  componentDidMount () {
    this.loadCitiesFromServer()
  }

  handleCitySelect(event) {
    event.preventDefault();
    let cityId = $(event.target).closest('.click-for-city').data('city-id');
    console.log("handleCitySelect- cityId is ", cityId)
    this.setState( {selectedCityId: cityId} );
    
    this.loadPostsFromServer();
  }

  render () {
    return (
      <div>
        <Carousel cities={this.state.cities} handleCitySelect={this.handleCitySelect}/>
        <TopicList cities={this.state.cities} handleCitySelect={this.handleCitySelect} />

        <CityListAndShowcase
          cities={this.state.cities}
          handleCitySelect={this.handleCitySelect}
          selectedCityId={this.state.selectedCityId}
          selectedPosts={this.state.selectedPosts}
        />
      </div>
    )
  }
}

export default BodyContainer
