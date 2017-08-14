import React, {Component} from 'react'

class AllTitles extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='col s3'>
            <h4>Cities</h4>
          </div>
          <div className='col s8 offset-s1 left-align'>
            <h4>{this.props.selectedCityObj.name}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default AllTitles
