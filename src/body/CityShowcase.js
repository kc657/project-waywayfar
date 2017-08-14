import React,{ Component } from 'react'
import PostModal from './PostModal.js'
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
      _id:'',
      allPosts:[]
    }
  }

  toggleModal = ()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleTitleChange(event){
    this.setState({title: event.target.value})
  }

  handleImageChange(event){
    this.setState({image: event.target.value})
  }

  handleDescriptionChange(event){
    this.setState({description: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: domainName + '/api/posts',
      data: {title: this.state.title, text: this.state.description, image: this.state.image}
    })
    .then(res=>{console.log(res)});

      this.toggleModal();

  }

  handleDelete(event){
    event.preventDefault();
    let postID = $(event.target).closest('.individualPost').data('post-id');
    console.log('deleting post', postID);
    $.ajax({
      method: 'DELETE',
      url: domainName + '/api/posts/' + postID
    })
    .then((res)=>{
      console.log('deleted post', res);
    })
  }

  handleUpdate(event, postContent){
    let postID = $(event.target).closest('.individualPost').data('post-id');
    console.log('updating', postID);
    $.ajax({
      method: 'PUT',
      url: domainName + '/api/posts/' + postID,
      data: postContent
    })
    .then((res)=>{
      console.log('updating post');
    })
  }

  componentDidMount(){
    $.ajax({
      method: 'GET',
      url: domainName + '/api/posts'
    })
    .then(res=>{this.setState({allPosts:res})
    })
  }

  render(){
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
              <SinglePost selectedPosts={ this.props.selectedPosts } allPosts={this.state.allPosts} handleDelete={(event)=>this.handleDelete(event)}/>
            </div>
          </div>
        </div>
        <PostModal show={this.state.isOpen} title={this.state.title} image={this.state.image} toggleModal={()=>this.toggleModal()} description={this.state.description} handleDescriptionChange={(event)=>this.handleDescriptionChange(event)} handleTitleChange={(event)=>this.handleTitleChange(event)}
        handleImageChange={(event)=>this.handleImageChange(event)}
        onClose={(event)=>this.toggleModal(event)} handleSubmit={(event)=>this.handleSubmit(event)}/>
      </div>
    )
  }
}

export default CityShowcase
