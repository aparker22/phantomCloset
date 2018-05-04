import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import CardDetail from '../CardDetail';

let LinkToSet = ({set, cardList}) => {
    return <div className="setList" key={set}>
        <Link to={`/set/${set}`} key={set}>{set}</Link>
        <div className="setCardList">{
            cardList.map((card) => <CardDetail card={card} />
                )
        }</div>
    </div>
}

let mapStateToProps = (state, {set}) => {
    return {
        cardList: state.cardList,
        set
    };
};

let mapDispatchToProps = (dispatch) =>{
    return {dispatch: dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkToSet);