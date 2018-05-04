import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import CardDetail from './CardDetail';
import { fetchCurrentSet } from './helperFunctions/headerFetchRequests';
import { updateCardList } from './actions';

let CardScreenDumb = ({ currentCard, updateSetList }) => {
    return <div>{
        currentCard.map(card =>
            <div className="cardScreen">
                <CardDetail card={card} />
                <div className="cardInformationDiv">
                    <h2>{card.name}</h2>
                    <h5 onClick= {
                        () => fetchCurrentSet(card.setname)
                                .then(setList => updateCardList(setList))
                    }><Link to={'/set/' + card.setname}>{card.setname}</Link></h5>
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
    ({updateCardList: (setList) => dispatch(updateCardList(setList))})

let CardScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardScreenDumb);

export default CardScreen;