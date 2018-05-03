import React from 'react';
import { connect } from 'react-redux';
// import './cardDetail.css';
import { addToQueue } from './actions';
import { postCardToQueue } from './fetch-data';
import { Link } from 'react-router-dom';


// assume card object is passed down as props
let buttonLogic = (userObject, card, cardQueue, addToQueue, isUserLoggedIn) => {
    if (isUserLoggedIn) {
        return(
            <button onClick={
                () =>
                postCardToQueue({
                    cardId: card.cardid,
                    userId: userObject.id,
                    position: cardQueue.length
                }, userObject.token).then(addToQueue({ card }))
            } > Add Card to Queue
            </button>
    )}
}
// assume card object is passed down as props
let CardDetail = ({card, addToQueue, userObject, cardQueue, isUserLoggedIn}) => {
    return (
        <div className="card-container">
            <div className="card">
            <Link to={`/card/${card.name}`} key={card.cardid}><img src={card.imageurl} alt={card.name} /></Link>
            </div>
            {
                buttonLogic(userObject, card, cardQueue, addToQueue, isUserLoggedIn)
            }
        </div>
    );
}

let mapStateToProps = (state, { card }) => {
    return {
        card,
        userObject: state.userObject,
        cardQueue: state.cardQueue,
        isUserLoggedIn: state.isUserLoggedIn
        
    };
};

let mapDispatchToProps = (dispatch) => {
   return {
    addToQueue: (card) => dispatch(addToQueue(card))
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);

