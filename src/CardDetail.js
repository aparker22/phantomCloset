import React from 'react';
import { connect } from 'react-redux';
import './cardDetail.css';
import { addCardToQueue } from './actions';
import { postCardToQueue } from './fetch-data';


// assume card object is passed down as props
let buttonLogic = (userObject, card, cardQueue, addCardToQueue) => {
    if (userObject) {
        return(
            <button onClick={
                () => postCardToQueue({
                    cardId: card.cardid,
                    userId: userObject.id,
                    position: cardQueue.length
                }, userObject.token).then(addCardToQueue({ card }))
            } > Add Card to Queue
            </button>
    )}
}

let CardDetail = ({card, addCardToQueue, userObject, cardQueue}) => {
    return(
        <div className="card-container">
            <div className="card">
                <img src={card.imageurl} alt="card image" />
                {
                    buttonLogic(userObject, card, cardQueue, addCardToQueue)
                }
            </div>
        </div>
    );
}

let mapStateToProps = (state, { card }) => {
    return {
        card,
        userObject: state.userObject,
        cardQueue: state.cardQueue
        
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addCardToQueue: (card) => dispatch(addToQueue(card))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);
