import React from 'react';
import {connect} from 'react-redux';
import CardDetail from './CardDetail';
import LinkToSet from './secondaryComponents/LinkToSet';

let CardScreenDumb = ({ currentCard }) => {
    return <div className="cardScreen">
        <CardDetail card={currentCard} />
        <div className="cardInformationDiv">
            <h2>{currentCard.name}</h2>
            <h5><LinkToSet set={currentCard.setname} /></h5>
            <h5>Card Type: {currentCard.type}</h5>
            <h5>Casting Cost: {currentCard.cmc}</h5>
            <h5>Text: {currentCard.text}</h5>
            <h5>Rarity: {currentCard.rarity}</h5>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return { currentCard: state.currentCard };
}

let CardScreen = connect(
    mapStateToProps,
)(CardScreenDumb);

export default CardScreen;