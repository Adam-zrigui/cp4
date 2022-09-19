import './App.css'
import React, { Component } from 'react'

import { Link,  Routes , Router , Route  } from 'react-router-dom';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name : "Adem",
      bio : "looking 4 web dev job",
      img:"https://gomycodelearndev.blob.core.windows.net/profiles/a4216f27-9638-4477-baf1-66825b1c08b2-133008966169919501.jpg",
      show:false,
      pro: "web dev"
    }

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState({
      show: true
    })
  }


  render() {
    return (
      <>
 <Routes>
  <Route path='/form' element={   <div class="card-container" >
    <img class="round" src={this.state.img} alt="user" />
    <h3>{this.state.Name}</h3>
<h6>{this.state.pro}</h6>
    <p>{this.state.bio}</p>
    <div class="buttons">

    </div>
    <div class="skills">
      <h6>Skills</h6>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
        <li>mongodb</li>
        <li>php</li>
        <li>MYSQL</li>
      </ul>
    </div>
  </div>}/>
    
  
  </Routes>       
 

               <ul>
                 <li>
                   <Link to='/form'><button className="primary ghost">Change!</button></Link>
                 </li>
               </ul> 

  </>
    )
  }
}
