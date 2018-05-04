import React from 'react';
import SetWithCardList from './secondaryComponents/SetWithCardList';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {setList: state.setList, 
            cardList: state.cardList}
};  

let SetScreenDumb = ({setList, cardList}) => 
    <div>{
            setList.map( set => <SetWithCardList set={set} cardList={cardList} />)
        }
    </div>


let SetScreen = connect(mapStateToProps)(SetScreenDumb)

export default SetScreen;