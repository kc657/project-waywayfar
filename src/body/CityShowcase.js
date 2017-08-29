import React,{ Component } from 'react'
import PostModal from './PostModal.js'
import UpdateModal from './UpdateModal.js'
import SinglePost from './SinglePost.js'
import $ from 'jquery-ajax'

class CityShowcase extends Component{
  constructor(props){
    super(props)
    this.state={
      updateIsOpen:false,
      createIsOpen:false,
      title:'',
      description:'',
      image:'',
      _id:'',
      editID:''
    }
  }

  toggleModal = () =>{
    this.setState({
      createIsOpen: !this.state.createIsOpen
    })
  }

  toggleUpdateModal = () =>{
    this.setState({
      updateIsOpen: !this.state.updateIsOpen
    })
  }

  handleChange = (event) => {
    let formId = $(event.target).closest('.validate').data('id-type');
    this.setState({[formId]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.selectedCityObj._id);
    $.ajax({
      method: 'POST',
      url: 'https://wayfar.herokuapp.com/api/posts',
      data: {
        title:this.state.title,
        text: this.state.description,
        image: this.state.image,
        _city: this.props.selectedCityObj._id
      }
    })
    .then(res=>{
      console.log(res)
      this.props.loadPostsFromServer();
      this.setState({
        title:'',
        description:'',
        image:''
      });
    });
    this.toggleModal();
  }

  handleDelete = (event) => {
    event.preventDefault();
    let postID = $(event.target).closest('.individualPost').data('post-id');
    console.log('trying to delete post with id', postID);
    $.ajax({
      method: 'DELETE',
      url: 'https://wayfar.herokuapp.com/api/posts/' + postID
    })
    .then((res)=>{
      console.log('deleted post', res);
      this.props.loadPostsFromServer();
    })
  }

  handleEdit = (event) => {
    let postID = $(event.target).closest('.individualPost').data('post-id');
    console.log("editing", postID);
    this.setState({editID:postID})
    this.toggleUpdateModal();
  }

  handleUpdate = (event) => {
    event.preventDefault();
    $.ajax({
      method: 'PUT',
      url: 'https://wayfar.herokuapp.com/api/posts/' + this.state.editID,
      data: {title:this.state.title, text: this.state.description, image: this.state.image}
    })
    .then((res)=>{
      console.log('successfully updated post', res);
      this.props.loadPostsFromServer();
      this.setState({
        title:'',
        description:'',
        image:''
      });
    })
    this.toggleUpdateModal();
  }

  render(){
    return(
      <div className="row container">
        <div id="citiesDisplay" className="col m12 container">
          <div id="cityShowcase" className="col m10 offset-m1 container">
            <div id="showcaseImg" className="col m7 offset-m3 center-align">
              <img className="responsive-img circle" src={ this.props.selectedCityObj.img_url } alt=""/>
            </div>
            <div id="showcaseTopPostsContainer" className="col m10">
              <h5>Top Posts</h5>
            </div>
            <div id="newPostButtonContainer" className="col m2 vertical-align">
              <button onClick={this.toggleModal} data-target="createPostModal" className="btn modal-trigger btn-floating btn-sm red right">
              <i className="material-icons">add</i></button>
            </div>
            <div id="allPostsContainer" className="col m12">
              <SinglePost
                selectedPosts={ this.props.selectedPosts }
                handleDelete={(event)=>this.handleDelete(event)}
                handleUpdate={(event)=>this.handleUpdate(event)}
                handleEdit={(event)=>this.handleEdit(event)}
              />
            </div>
          </div>
        </div>
        <PostModal show={this.state.createIsOpen} toggleModal={()=>this.toggleModal()} title={this.state.title} image={this.state.image}  description={this.state.description} handleChange={(event)=>this.handleChange(event)} handleSubmit={(event)=>this.handleSubmit(event)} onClose={(event)=>this.toggleModal(event)}/>
        <UpdateModal show={this.state.updateIsOpen} toggleUpdateModal={(event)=>this.toggleUpdateModal(event)} title={this.state.title} image={this.state.image} description={this.state.description} handleChange={(event)=>this.handleChange(event)} handleUpdate={(event)=>this.handleUpdate(event)} onClose={(event)=>this.toggleUpdateModal(event)}/>
      </div>
    )
  }
}

export default CityShowcase
