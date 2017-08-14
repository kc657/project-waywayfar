import React, { Component } from 'react'

class CityList extends Component {
  render () {
    let cityCards = this.props.cities.map(city => {
      return (
        <div id='citiesCard' className='container click-for-city' data-city-name={city.name} data-city-id={city._id} onClick={this.props.handleCitySelect}>
          <img className='circle list responsive-img' src={city.img_url} id='citiesCardPhoto' /><span>{ city.name }</span>
        </div>
      )
    })

    return (
      <div id='cityList' className='col m12 center-align container'>
        { cityCards }
        {/* STATIC VERSION
          <div id='citiesCard' className='container'>
          <img className='circle list responsive-img' src='https://www.singaporeair.com/saar5/images/destination/what-to-do/syd/Sydney-skyline.jpg' alt='' id='citiesCardPhoto' /><span>Sydney</span>
          </div>
        */}
      </div>
    )
  }
}

export default CityList
