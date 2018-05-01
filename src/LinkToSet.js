import React from 'react';
import {Link} from 'react-router-dom';

let LinkToSet = ({set}) => <Link to={`/set/${set.name}`}>{set.name}</Link>

export default LinkToSet;