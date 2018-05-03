import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


// assume card object is passed down as props
let CardDetail = ({card}) => {
    return (
        <div className="card-container">
            <div className="card">
            <Link to={`/card/${card.name}`} key={card.cardid}><img src={card.imageurl} alt={card.name} /></Link>
                {/* <button onClick={() => addCardToQueue(card)}>Add Card</button> */}
            </div>
        </div>
    );
}

// let mapStateToProps = () => {
//     return {
//         card: card
//     };
// };

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addCardToQueue: (card) => dispatch(addToQueue(card))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);

export default CardDetail;

