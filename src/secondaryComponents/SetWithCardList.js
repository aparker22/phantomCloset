import React from 'react';
import {Link} from 'react-router-dom';
import CardDetail from '../CardDetail';

let LinkToSet = ({setList, cardList}) => {
    return setList.map(set => 
    <div className="homeScreenSetList" key={set}>
        <Link to={`/set/${set}`} key={set}>{set}</Link>
        <div className="setCardList">{
            cardList.map((card) => {
                if (card.setname === set) {
                    return <CardDetail card={card} />
                } else {
                    return null
                }
            })
        }</div>
    </div>)
}

export default LinkToSet;