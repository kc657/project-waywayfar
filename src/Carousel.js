import React, {Component} from 'react'

class Carousel extends Component {



  render () {
    let citiesImages = this.props.cities.map(city => {
      return (
        <a className='carousel-item' href='#'><img src={ city.img_url } alt='city image' /></a>
      );
    });
    return (
        <div className='col s12 carousel-holder'>
          <div className='carousel carousel-slider'>
            { citiesImages }

            {/* STATIC VERSION
              <a className='carousel-item' href='#one!'><img src='http://i.imgur.com/LziiBHl.jpg' alt='' /></a>
            */}

          </div>
          <i className='material-icons icon icon-left'>chevron_left</i>
          <i className='material-icons icon icon-right'>chevron_right</i>
        </div>
    )
  }
}

export default Carousel
