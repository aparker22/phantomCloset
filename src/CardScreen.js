import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import CardDetail from './CardDetail';
import LinkToSet from './secondaryComponents/LinkToSet';
import { fetchCurrentSet } from './helperFunctions/headerFetchRequests';
import { updateCardList } from './actions';

let CardScreenDumb = ({ currentCard, updateCardList }) => {
    return <div>{
        currentCard.map(card =>
            <div className="cardScreen">
                <CardDetail card={card} />
                <div className="cardInformationDiv">
                    <h2>{card.name}</h2>
                    <div onClick={
                        () => fetchCurrentSet(card.setname)
                                .then(res => updateCardList(res))
                    }><h5><LinkToSet set={card.setname} key={card.setname}/></h5></div>
                    <h5>Card Type: {card.type}</h5>
                    <h5>Casting Cost: {card.cmc}</h5>
                    <h5>Text: {card.text}</h5>
                    <h5>Rarity: {card.rarity}</h5>
                </div>
            </div>
        )}
    </div>
}

let mapStateToProps = (state) => {
    return { currentCard: state.currentCard };
}

let mapDispatchToProps = (dispatch) =>
    ({updateCardList: (res) => dispatch(updateCardList(res))})

let CardScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardScreenDumb);

export default CardScreen;