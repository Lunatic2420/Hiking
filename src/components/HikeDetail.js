import React, {Component} from 'react';
import axios from "axios"

import '../App.css';

class HikeDetail extends Component{
  constructor(props){
    super(props)
  this.state={
        
        id: '',
        name: '',
        imgMedium: '',
        summary: '',
        difficulty:'',
        location: ''
  }
  
  }


componentDidMount = async (props)=>{
  const url =`https://www.hikingproject.com/data/get-trails-by-id?ids=${this.props.match.params.id}&key=200602842-d85aaa22cf9dc2a1ba17569b62a04f4e`
try{
  const response = await axios(url)
  const current = response.data.trails[0]
  this.setState({
      location: current.location,
      id: current.id,
      name: current.name,
      imgMedium: current.imgMedium,
      summary: current.summary,
      difficulty: current.difficulty,
      length: current.length,
  })
  console.log(current)
}catch(error){
    console.log(error)
}
}
render(){

  return (
      <div>
                 
               <div key={this.state.id} className='trail'>
                    <h3 className='title'>{this.state.name}</h3> 
                    <p className='difficulty'>Difficulty: {this.state.difficulty}</p>
                    <img src={this.state.imgMedium} alt='' className='hdImage'/>
                    <p className="location">Location: {this.state.location} </p>
                    <p className='description'>Discription: {this.state.summary}</p>
                    <p>Distance: {this.state.length} mile(s)</p>
                   
                </div>
           
                
      </div>
    
  )
            }
}
export default HikeDetail;
