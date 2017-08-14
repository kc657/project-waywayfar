import React, { Component } from 'react'
import CityList from './CityList.js'
import CityShowcase from './CityShowcase.js'
import AllTitles from './AllTitles.js'

class CityListAndShowcase extends Component {

  render () {
    return (
      <div>
        <AllTitles
          selectedCityObj={this.props.selectedCityObj}
        />
        <div className='row'>
          <div className='col s3'>
            <CityList cities={this.props.cities} handleCitySelect={this.props.handleCitySelect} />
          </div>
          <div className='col s9'>
            <CityShowcase
              selectedCityObj={this.props.selectedCityObj}
              selectedPosts={this.props.selectedPosts}
              loadPostsFromServer={this.props.loadPostsFromServer}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CityListAndShowcase
