import React from 'react';
import {connect} from 'react-redux';
import LinkToSet from './secondaryComponents/SetWithCardList';

let SetScreenDumb = ({setName, cardList}) => {
    return <div className>
        <LinkToSet set={setName} cardList={cardList} />
    </div>
}

let mapStateToProps = (state, {match}) => {
    let setName = state.setList.find(set =>
        set === match.params.setname);
    return {cardList: state.cardList, setName, match};
}

let IndividualSetScreen = connect(mapStateToProps)(SetScreenDumb);

export default IndividualSetScreen;
