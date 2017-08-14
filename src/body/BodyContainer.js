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
      selectedCityObj: {},
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
      this.setState(
        {
          cities: res,
          selectedCityObj: res[0]
        }
      );
      //set itital selectedCityId to be the first city in the response
      // this.setState({ selectedCityId: res[0]._id })
      // console.log("AFTER INITIAL GET- SelectedCityId is ", this.state.selectedCityId);
      console.log("AFTER INITIAL GET- selectedCityObj is ", this.state.selectedCityObj);
      this.loadPostsFromServer();
    }, (err) => {
      console.log('error: ', err)
    })
  }

  loadPostsFromServer(){
    $.ajax({
      method: 'GET',
      url: domainName + '/api/cities/' + this.state.selectedCityObj._id + '/posts',
    })
    .then(res => {
      this.setState({ selectedPosts: res.postsByCity });
      console.log("Loaded posts from server ", this.state.selectedPosts);
    });
  }

  componentDidMount() {
    this.loadCitiesFromServer();
  }

  handleCitySelect(event) {
    event.preventDefault();
    let cityId = $(event.target).closest('.click-for-city').data('city-id');

    let allCities = this.state.cities;

    let newSelectedCityObj = allCities.filter(function(city){
      return(city._id === cityId);
    });

   this.setState({ selectedCityObj: newSelectedCityObj[0] });

    $.ajax({
      method: 'GET',
      url: domainName + '/api/cities/' + cityId + '/posts',
    })
    .then(res => {
      this.setState({ selectedPosts: res.postsByCity });
    });
  }

  render () {
    return (
      <div>
        <Carousel cities={this.state.cities} handleCitySelect={this.handleCitySelect}/>
        <TopicList cities={this.state.cities} handleCitySelect={this.handleCitySelect} />

        <CityListAndShowcase
          cities={this.state.cities}
          selectedCityObj={this.state.selectedCityObj}
          selectedPosts={this.state.selectedPosts}
          handleCitySelect={this.handleCitySelect}
          loadPostsFromServer={this.loadPostsFromServer}
        />
      </div>
    )
  }
}

export default BodyContainer
