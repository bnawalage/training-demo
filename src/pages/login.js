 import React from 'react';  
class Login extends React.Component {

    constructor(props){
            super(props);
            this.state={ 
               user:{
                username:'',
                password:'' 
               }
            }
            this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){ 
        const {user}= this.state
        user[e.target.name]=e.target.value;
        this.setState({
            user:user
        }) 
      }
   render(){
        return <form onSubmit={this.onSubmit}>
            <input type="text" name="username" value={this.state.user.username} onChange={this.handleChange}/>
            <input type="text" name="password" value={this.state.user.password} onChange={this.handleChange}/>
            <input type="submit" value="submit"/>
            </form>
   } 
}

export default Login;