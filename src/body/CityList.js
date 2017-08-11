import React, { Component } from 'react'

class CityList extends Component {
  render () {
    return (
      <div id='cityList' className='col m2 center-align'>
        <h4>Cities</h4>
        <div id='citiesCard' className='container'>
          <img className='circle list responsive-img' src='http://i.imgur.com/LziiBHl.jpg' alt='' id='citiesCardPhoto' /><span>London</span>
        </div>
        <div id='citiesCard' className='container'>
          <img className='circle list responsive-img' src='https://www.singaporeair.com/saar5/images/destination/what-to-do/syd/Sydney-skyline.jpg' alt='' id='citiesCardPhoto' /><span>Sydney</span>
        </div>
        <div id='citiesCard' className='container'>
          <img className='circle list responsive-img' src='http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg' alt='' id='citiesCardPhoto' /><span>San Francisco</span>
        </div>
        <div id='citiesCard' className='container'>
          <img className='circle list responsive-img' src='http://media2.giphy.com/media/YwJHMn7GXkTNS/giphy.gif' alt='' id='citiesCardPhoto' /><span>Shanghai</span>
        </div>
      </div>
    )
  }
}

export default CityList
