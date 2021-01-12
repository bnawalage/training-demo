
import React from 'react';
import { withRouter } from 'react-router-dom';
class SubMessage extends React.Component {

    render(){
    return <h1>{this.props.match.params.id}</h1>
    }
}

export default withRouter(SubMessage);