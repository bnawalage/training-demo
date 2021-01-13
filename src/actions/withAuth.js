import React, { Component } from 'react'; 
import { connect } from "react-redux"; 
function withAuth(AuthComponent) {
    
    return  class AuthWrapped extends Component {
        constructor() {
            super();
            this.state = {
                logged: null
            }
        }

        componentWillMount() {
            if (!this.props.loggedin) {
                this.props.history.replace('/')
            }
            else {
                try {
                    
                    this.setState({
                        logged: true
                    })
                }
                catch (err) {
                    localStorage.removeItem("loggedin")
                    this.props.history.replace('/')
                }
            }
        }

        render() {
            if (this.props.loggedin) {
                return (
                    <AuthComponent history={this.props.history}  match={this.props.match}/>
                )
            } else {
                return null
            }
        }
    }
} 


export default withAuth;