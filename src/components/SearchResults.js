import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';

class SearchResults extends Component {
    constructor(props){
    super(props)
    this.state={
      lat: '',
      lon:'',
      city: 'boston'
    }
}
async componentDidMount(){
  // this.createCoordinates()

} 
handleSubmit = (e)=>{
  e.preventDefault()
  this.createCoordinates();
}
handleInput=(e)=>{
  this.setState({
    city: e.target.value
  })

}

passResults =(lat, lon)=>{
  this.props.handleSearchResult(lat, lon)
}
 createCoordinates = async() => {
  const url =`https://api.opencagedata.com/geocode/v1/json?q=${this.state.city}&key=15ff9fe808984f1ca9d347f81db54d48`
   Axios(url).then(res => {
     const lat = res.data.results[0].bounds.northeast.lat
     const lon = res.data.results[0].bounds.northeast.lng
    this.passResults(lat, lon)
   })
  }

  render(){
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} type='text' placeholder = 'Enter Location'/>
          <button type='Submit'>Submit</button>
        </form>
      </div>
    );
  }
}
export default SearchResults;
