import React from 'react'; 
import App from '../App';
import WelcomeForm from './WelcomeHome';
import { connect } from "react-redux";
import {logoutAction} from '../actions/loginAction';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import withAuth from '../actions/withAuth';

const user={id:1,usernam:'user'};

class Home extends React.Component {

    constructor(props){
        super(props);
        this.logout=this.logout.bind(this)
    }
 
    logout(){ 
        this.props.logoutAction();
        this.props.history.replace("/")
    }
     
    render(){
        return  <table>
                <tbody>
                    <tr>
                        <td>
                            <Link to={"/logged/app/"+user.id} >App</Link>
                        <br/> 
                            <Link to="/logged/welcome" >Welcome</Link>
                            <button onClick={this.logout}>Logout </button>
                        </td>
                        <td rowSpan={2}>
                                 <Switch>
                                    <Route path="/logged/app/:lastname" component={App}/>
                                    <Route path="/logged/welcome" component={WelcomeForm}/>
                                </Switch>
                        </td>
                    </tr> 
                </tbody>
            </table>
  
    }
}

function mapStateToProps(globalState) {
    return {
        
    };
}

function mapActionToProps(){
    return {logoutAction}
}

export default connect(mapStateToProps,mapActionToProps) (withAuth(Home))