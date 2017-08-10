import React, { Component } from 'react';

class Carousel extends Component {
  render(){
    return(
      <div className="">
        <div className="row">
          <div className="col s12 carousel-holder">
            <div className="carousel carousel-slider">
              <a className="carousel-item" href="#one!"><img src="http://i.imgur.com/LziiBHl.jpg" alt=""/></a>
              <a className="carousel-item" href="#two!"><img src="http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg" alt=""/></a>
              <a className="carousel-item" href="#three!"><img src="http://media2.giphy.com/media/YwJHMn7GXkTNS/giphy.gif" alt=""/></a>
              <a className="carousel-item" href="#four!"><img src="http://www.australia.com/content/australia/en_us/places/sydney/nsw-sydney-harbour/_jcr_content/image.adapt.985.HIGH.jpg" alt=""/></a>
            </div>
            <i className="material-icons icon icon-left">chevron_left</i>
            <i className="material-icons icon icon-right">chevron_right</i>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel
