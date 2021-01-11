
import React from 'react';
import { Link } from 'react-router-dom';
class Welcome extends React.Component {
    constructor(props) {
      super(props);  
      this.state={ 
        text:''
      }
      this.changeMe=this.changeMe.bind(this);
  } 

  changeMe(){
      this.setState({
        text:'text133'
      });
  } 

  render(){
//    const users=this.state;
     return  (
       <div>
            <ul>
              {
              this.props.users.map((u,idx)=>{
                return <li key={idx}><h1>{u.name} - {u.age} -{this.state.text}  </h1>  
                <button onClick={(e)=>{
                  this.props.deleteAbc(e,idx);
                }} >delete</button></li>
              })
              } 
          </ul> 
        </div>);
  }
}
export default  Welcome;