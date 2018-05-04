import React from 'react';
import {Link} from 'react-router-dom';
import CardDetail from '../CardDetail';

let LinkToSet = ({set, cardList}) => {
    return <div className="setList" key={set}>
        <Link to={`/set/${set}`} key={set}>{set}</Link>
        <div className="setCardList">{
            cardList.filter(card => card.setname === set).splice(0, 8)
                .map((card) => <CardDetail card={card} />
                )
        }</div>
    </div>
}


export default LinkToSet;