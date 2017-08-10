import React,{ Component } from 'react'

class CityList extends Component{
  render(){
    return(
      <div id="citiesList" class="col s3 container">

        {/* map function that goes through our this.props.city to create the clickable links*/}

        <div id="citiesCard" class="container">
          <img class="circle responsive-img" src="http://i.imgur.com/LziiBHl.jpg" alt="" id="citiesCardPhoto"/><span>London</span>
        </div>
        <div id="citiesCard" class="container">
          <img class="circle responsive-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Madsen_Building%2C_University_of_Sydney%2C_Australia.jpg/220px-Madsen_Building%2C_University_of_Sydney%2C_Australia.jpg" alt="" id="citiesCardPhoto"/><span>Sydney</span>
        </div>
        <div id="citiesCard" class="container">
          <img class="circle responsive-img" src="http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg" alt="" id="citiesCardPhoto"/><span>San Francisco</span>
        </div>
        <div id="citiesCard" class="container">
          <img class="circle responsive-img" src="http://media2.giphy.com/media/YwJHMn7GXkTNS/giphy.gif" alt="" id="citiesCardPhoto"/><span>Shanghai</span>
      </div>
    )
  }
}

export default CityList
