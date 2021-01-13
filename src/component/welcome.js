
import React from 'react';
import { Link, Switch,useRouteMatch,Route, withRouter } from 'react-router-dom';
import SubMessage from './SubMessage';

function Welcome2() {
  const { path, url } =  useRouteMatch();
}

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
    const { path, url } = this.props.match;
    console.log("path:"+path);
    console.log("path:"+url);
     return  (
       <div>
            <ul>
              {
              this.props.users.map((u,idx)=>{
                return <li key={idx}><h1>   <Link to={`${url}/${u.age}`}>u.name</Link> </h1>   
                <button onClick={(e)=>{
                  this.props.deleteAbc(e,idx);
                }} >delete</button></li>
              })
              } 
          </ul> 
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/:id`}>
                <SubMessage />
            </Route>
          </Switch>
          
        </div>);
  }
}
export default  withRouter(Welcome);