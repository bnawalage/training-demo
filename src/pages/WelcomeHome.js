import React from 'react';
import Welcome from "../component/welcome";

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
    
  
    render(){
        const {user,users}=this.state;
        return  (
        <div>
          <form onSubmit={this.onSubmit}>
          <input type="text" name="name" value={user.name} onChange={this.handleChange}/>
          <input type="text" name="age" value={user.age} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form> 
         <ul>
           {
            users.map(u=>{
              return <li key={u.name}><Welcome user={u}/></li>
            })
           } 
        </ul>  
      </div>)
    } 
  }

  export default  WelcomeForm;