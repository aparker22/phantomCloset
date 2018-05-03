import React from 'react';
import {Link} from 'react-router-dom';

let LinkToSet = ({setList}) => {
    return setList.map(set => 
    <div className="homeScreenSetList" key={set}>
        <Link to={`/set/${set}`} key={set}>{set}</Link>
    </div>)
}

export default LinkToSet;