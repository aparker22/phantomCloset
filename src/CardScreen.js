import React from 'react';
import {connect} from 'react-redux';
import CardDetail from './CardDetail';
import LinkToSet from './secondaryComponents/LinkToSet';

let CardScreenDumb = (cardToDisplay) => {
    return <div className="cardScreen">
        <CardDetail card={cardToDisplay} />
        <div className="cardInformationDiv">
            <h2>{cardToDisplay.name}</h2>
            <h5><LinkToSet set={cardToDisplay.setname} /></h5>
            <h5>Card Type: {cardToDisplay.type}</h5>
            <h5>Casting Cost: {cardToDisplay.cmc}</h5>
            <h5>Text: {cardToDisplay.text}</h5>
            <h5>Rarity: {cardToDisplay.rarity}</h5>
        </div>
    </div>
}

let mapStateToProps = (state, {match}) => {
    let cardToDisplay = state.cardList.find(card =>
        card.name === match.params.card);
    return cardToDisplay;
}

let CardScreen = connect(mapStateToProps)(CardScreenDumb);

export default CardScreen;