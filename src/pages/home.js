import React from 'react'; 
import App from '../App';
import WelcomeForm from './WelcomeHome';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const user={id:1,usernam:'user'};

class Home extends React.Component {

    render(){
return  <table>
                <tbody>
                    <tr>
                        <td>
                            <Link to={"/logged/app"+user.id} >App</Link>
                        <br/> 
                            <Link to="/logged/welcome" >Welcome</Link>
                        </td>
                        <td rowSpan={2}>
                                <Route path="/logged//app/:lastname" component={App}/>
                                <Route path="/logged//welcome" component={WelcomeForm}/>
                        </td>
                    </tr> 
                </tbody>
            </table>
  
    }
}

export default Home;