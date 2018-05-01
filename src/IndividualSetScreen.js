import React, {Component} from 'react';
import {connect} from 'react-redux';

class IndividualSet extends Component {
  
    render() {
    let setName = this.props.match.params.setname;
    
    return( 
    <div>
        <p>{setName} Set Screen</p>
    </div>
    )
    }
  }
  
  let IndividualSetScreen = connect(null)(IndividualSet)
  
  export default IndividualSetScreen;
