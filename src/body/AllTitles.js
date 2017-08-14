import React, {Component} from 'react'

class AllTitles extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='col s3'>
            <h4>Cities</h4>
          </div>
<<<<<<< HEAD
          <div className='col s8 offset-s1 left-align'>
            <h4>Shanghai</h4>
=======
          <div className="col s8 offset-s1 left-align">
            <h4>{this.props.selectedCityObj.name}</h4>
>>>>>>> 4ba93421edc42f4b99dcb3c2552d931168384a80
          </div>
        </div>
      </div>
    )
  }
}

export default AllTitles
