 import React from 'react';  
 import { connect } from "react-redux";
 import {loginAction} from '../actions/loginAction';
class Login extends React.Component {

    constructor(props){
            super(props);
            this.state={ 
               user:{
                username:'',
                password:'' 
               }
            }
            this.handleChange=this.handleChange.bind(this);
            this.onSubmit=this.onSubmit.bind(this)
    }

    handleChange(e){ 
        const {user}= this.state
        user[e.target.name]=e.target.value;
        this.setState({
            user:user
        }) 
    }
    onSubmit(e){
        e.preventDefault();
        localStorage.setItem("loggedin",true);
        this.props.loginAction();
        this.props.history.replace('/logged')
    }

   render(){
        return <form onSubmit={this.onSubmit}>
            <h1>Login page</h1>
           <input type="text" name="username" value={this.state.user.username} onChange={this.handleChange}/>
            <input type="text" name="password" value={this.state.user.password} onChange={this.handleChange}/>
            <input type="submit" value="submit"/>
           </form>
   } 
}

function mapStateToProps(globalState) {
    return {
        
    };
}

function mapActionToProps(){
    return {loginAction}
}

export default connect(mapStateToProps,mapActionToProps)(Login);  