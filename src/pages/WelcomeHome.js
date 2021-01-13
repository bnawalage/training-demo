import React from 'react';
import '../App.css';
import Welcome from "../component/welcome";
import { Route, useRouteMatch } from 'react-router-dom';
import SubMessage from '../component/SubMessage';

class WelcomeForm extends React.Component {

    constructor(props) {
       super(props);
       this.state={
          user:{
            name:'',
            age:''
          },
          users:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.updateMe=this.updateMe.bind(this);
        this.welcomeref=React.createRef();
        this.delete=this.delete.bind(this); 
    } 
  
    handleChange(e){
      const {user}=this.state; 
      user[e.target.name]=e.target.value;
      this.setState({
        user:user
      })
      console.log(user);
    }
  
    onSubmit(e){
      e.preventDefault();
      const {user,users}=this.state; 
      users.push(user); 
      this.setState({
        users:users,
        user:{
          name:'',
          age:''
        }
      }); 
    }

    updateMe(){
      this.welcomeref.current.changeMe();
    }
    

    
    delete(e,idx){
      let {users}=this.state;
      users.splice(idx,1);
      this.setState({
        users:users
      });
    }
  
    render(){
        const {user,users}=this.state; 
        return  (
        <div>
          <form onSubmit={this.onSubmit}>
          <input type="text" name="name" value={user.name} onChange={this.handleChange}/>
          <input type="text" name="age" value={user.age} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form> 
         <button name="but" value="update" onClick={this.updateMe}>Update</button>         
         <Welcome users={users} ref={this.welcomeref} deleteAbc={this.delete}/>
        

      </div>)
    } 
  }

  export default  WelcomeForm;