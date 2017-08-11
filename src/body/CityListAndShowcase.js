import React, { Component } from 'react'
import CityList from './CityList.js'
import CityShowcase from './CityShowcase.js'

class CityListAndShowcase extends Component {
  constructor () {
    super()
    this.state = {
      cities: [], // ajax call puts all city in our database into this  state
      selectedCity: [ ],
      showcasedCity: [ ]
    }
  }
  render () {
    return (
      <div className='col s12'>
        <CityShowcase />
      </div>
    )
  }
}

export default CityListAndShowcase