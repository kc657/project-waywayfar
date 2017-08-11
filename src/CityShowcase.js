import React,{ Component } from 'react'
import CityList from './CityList.js'

class CityShowcase extends Component{
  render(){
    return(
      <div className="row container">
        <div>
          <h2> </h2>
        </div>
        <div id="citiesDisplay" className="col m12 container">
          <div><CityList /></div>
          <div id="cityShowcase" className="col m8 offset-m1">
            <div className="col m6">
                <h1>Shanghai</h1>
            </div>
            <div id="showcaseMainImg" className="col m6">
                <img className="responsive-img circle right" src="http://media2.giphy.com/media/YwJHMn7GXkTNS/giphy.gif" />
            </div>
            <div id="showcaseTopPostsContainer" className="col m10">
              <h5>Top Posts</h5>
            </div>
            <div id="newPostButtonContainer" className="col m2 vertical-align">
              <a className="btn btn-floating btn-sm right"><i className="material-icons">edit</i></a>
            </div>
            <div id="allPostsContainer" className="col m12">
              <div className="col s12 card-panel hoverable">
                <div id="post1ImgContainer" className="col m4">
                  <img className="responsive-img post-img" src="https://www.seat61.com/images/beijing-to-shanghai-sleeper.jpg" />
                </div>
                <div id="post1TextContainer" className="col m8">
                  <h5>World's Fastest Train</h5>
                  <p>This is the Shanghai Maglev (Magnetic Levitation) train, the world's fastest commercial train, with a top speed of 268mph. Enjoy the Ride! It does the 19 mile journey to Pudong airport in 7 minutes!</p>
                </div>
              </div>
              <div className="col s12 card-panel hoverable">
                <div id="post2ImgContainer" className="col m4">
                  <img className="responsive-img post-img" src="http://www.bombardier.com/content/dam/Websites/bombardiercom/Projects/metro-shanghai-1916.jpg/_jcr_content/renditions/cq5dam.web.750.750.jpeg" />
                </div>
                <div id="post2TextContainer" className="col m8">
                  <h5>World's Slowest Train</h5>
                  <p> At Longyang Rd. Station near the east end of Line 2, you can take Shanghai Maglev Train (SMT) to go to Pudong International Airport. ... Pudong Airport Station of Metro Line 2 is located between T1 and T2. Follow the sign to get to the right
                    terminal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CityShowcase
