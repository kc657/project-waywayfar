import React, { Component } from 'react'
import CityList from './CityList.js'
import CityShowcase from './CityShowcase.js'
import AllTitles from './AllTitles.js'

class CityListAndShowcase extends Component {
  constructor () {
    super()
    this.state = {
      cities: [], // all cities are passed into this state from parent BodyContainer
      selectedCity: [ ],
      showcasedCity: [ ]
    }
  }
  render () {
    // console.log('CityListAndShowcase', this.props.cities);
    return (
      <div>
        <AllTitles />
        <div className='row'>
          <div className='col s3'>
            <CityList cities= { this.props.cities } />
          </div>
          <div className='col s9'>
            <CityShowcase />
          </div>
        </div>
      </div>
    )
  }
}

export default CityListAndShowcase
