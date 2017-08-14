import React, { Component } from 'react'
import CityList from './CityList.js'
import CityShowcase from './CityShowcase.js'
import AllTitles from './AllTitles.js'

class CityListAndShowcase extends Component {

  render () {
    // console.log('CityListAndShowcase', this.props.cities);
    return (
      <div>
        <AllTitles />
        <div className='row'>
          <div className='col s3'>
            <CityList cities= { this.props.cities } handleCitySelect={this.props.handleCitySelect}/>
          </div>
          <div className='col s9'>
            <CityShowcase
              selectedCityId={ this.props.selectedCityId }
              selectedPosts={ this.props.selectedPosts }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CityListAndShowcase
