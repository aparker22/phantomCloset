import React from 'react';
import { connect } from 'react-redux';
import './cardDetail.css';


// assume card object is passed down as props

let CardDetail = ({card, addCardToQueue}) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={card.imageurl} alt="card image">
                <button onClick={() => addCardToQueue(card)}>Add Card</button>
            </div>
        </div>
    );
}

let mapStateToProps = () => {
    return {
        card: card
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addCardToQueue: (card) => dispatch(addToQueue(card))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);
