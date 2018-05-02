import React from 'react';
import {Link} from 'react-router-dom';

let LinkToSet = ({set}) => <Link to={`/set/${set}`} key={set}>{set}</Link>

export default LinkToSet;