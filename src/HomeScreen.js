import React, {Component} from 'react';
import SetWithCardList from './secondaryComponents/SetWithCardList';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {setList: state.setList, cardList: state.cardList}
};

class HomeScreenComponent extends Component {
    
    render(){
    let {setList} = this.props;
    return (
    <div className="homeScreen">
        <div className="homeScreenTop"></div>
        <SetWithCardList setList={setList} />
    </div>
    )}
}

let HomeScreen = connect(mapStateToProps)(HomeScreenComponent)

export default HomeScreen;