
import React from 'react';
class Welcome extends React.Component {
    constructor(props) {
      super(props); 
  } 
  render(){
    return <h1>{this.props.user.name} - {this.props.user.age}</h1>
  }
}
export default  Welcome;