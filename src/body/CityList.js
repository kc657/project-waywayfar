import React, { Component } from 'react'

class CityList extends Component {
  render () {
    let cityCards = this.props.cities.map(city => {
      return (
        <div key={city._id} id='citiesCard' className='container click-for-city' data-city-name={city.name} data-city-id={city._id} onClick={this.props.handleCitySelect}>
          <img className='circle list responsive-img' src={city.img_url} id='citiesCardPhoto' alt='' /><span>{ city.name }</span>
        </div>
      )
    })

    return (
      <div id='cityList' className='col m12 center-align container'>
        { cityCards }
      </div>
    )
  }
}

export default CityList
