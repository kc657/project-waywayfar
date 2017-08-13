import React, {Component} from 'react'

class Carousel extends Component {


  render () {
    let citiesImages = this.props.cities.map(city => {
      return (
        <a className='carousel-item' href='#' data-id={ city._id } onClick={ this.props.handleCitySelect }><img src={ city.img_url } alt='city image' /></a>
      )
    })
    return (
      <div className='col s12 carousel-holder'>
        <div className='carousel carousel-slider'>
          { citiesImages }
        </div>
        <i className='material-icons icon icon-left'>chevron_left</i>
        <i className='material-icons icon icon-right'>chevron_right</i>
      </div>
    )
  }
}

export default Carousel
