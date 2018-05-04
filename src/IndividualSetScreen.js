import React from 'react';
import {connect} from 'react-redux';
import LinkToSet from './secondaryComponents/SetWithCardList';

let SetScreenDumb = ({setName, cardList}) => {
    return <div>
        <LinkToSet set={setName} cardList={cardList} />
    </div>
}

let mapStateToProps = (state, {match}) => {
    let setName = match.params.setname;
    return {cardList: state.cardList, setName};
}

let IndividualSetScreen = connect(mapStateToProps)(SetScreenDumb);

export default IndividualSetScreen;
