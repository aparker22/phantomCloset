import React from 'react';
import {connect} from 'react-redux';
import LinkToSet from './secondaryComponents/SetWithCardList';

let SetScreenDumb = ({setName, cardList}) => {
    return <div>
        <LinkToSet set={setName} cardList={cardList} />
    </div>
}

let mapStateToProps = (state, {match}) => {
    let setName = state.setList.find(set =>
        set === match.params.setname);
    return {cardList: state.cardList, setName, match};
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let IndividualSetScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetScreenDumb);

export default IndividualSetScreen;
