import React from 'react';
import {Link} from 'react-router-dom';

let LinkToSet = ({setList}) => {
    return setList.map(set => 
    <div className="homeScreenSetList" key={set.id}>
        <Link to={`/set/${set.name}`}>{set.name}</Link>
    </div>)
}

export default LinkToSet;