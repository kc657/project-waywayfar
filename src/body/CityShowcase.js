import React,{ Component } from 'react'
import CityList from './CityList.js'
import Modal from './Modal.js'
import SinglePost from './SinglePost.js'
import $ from 'jquery-ajax'
let domainName = process.env.DOMAIN_NAME || 'http://localhost:3001'

class CityShowcase extends Component{
  constructor(props){
    super(props)
    this.state={
      isOpen:false,
      title:'',
      description:'',
      image:'',
    }
  }

  toggleModal = ()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log("modal state is", this.state.isOpen);
  }

  handleTitleChange(event){
    this.setState({title: event.target.value})
    console.log(this.state.title);
  }

  handleImageChange(event){
    this.setState({image: event.target.value})
    console.log(this.state.image);
  }

  handleDescriptionChange(event){
    this.setState({description: event.target.value})
    console.log(this.state.description);
  }

  handleSubmit(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: domainName + '/api/posts',
      data: {title: this.state.title, text: this.state.description, image: this.state.image}
    })
    .then(res=>{console.log(res)});
  }

  componentDidMount(){

  }

  render(){
    console.log("selectedPosts", this.props.selectedPosts);
    // this.props.loadPostsFromServer();

    return(
      <div className="row container">
        <div>
          <h2> </h2>
        </div>
        <div id="citiesDisplay" className="col m12 container">
          <div id="cityShowcase" className="col m10 offset-m1 container">
            <div id="showcaseImg" className="col m7 offset-m3 center-align">
              <img className="responsive-img circle" src={ this.props.selectedCityObj.img_url } />
            </div>
            <div id="showcaseTopPostsContainer" className="col m10">
              <h5>Top Posts</h5>
            </div>
            <div id="newPostButtonContainer" className="col m2 vertical-align">
              <button onClick={this.toggleModal} data-target="createPostModal" className="btn modal-trigger btn-floating btn-sm right"><i className="material-icons">edit</i></button>
            </div>
            <div id="allPostsContainer" className="col m12">

                <SinglePost selectedPosts={ this.props.selectedPosts }/>

            </div>
          </div>
        </div>
        <Modal show={this.state.isOpen} title={this.state.title} image={this.state.image} description={this.state.description} handleDescriptionChange={(event)=>this.handleDescriptionChange(event)} handleTitleChange={(event)=>this.handleTitleChange(event)}
        handleImageChange={(event)=>this.handleImageChange(event)}
        onClose={(event)=>this.toggleModal(event)} handleSubmit={(event)=>this.handleSubmit(event)}/>
      </div>
    )
  }
}

export default CityShowcase
