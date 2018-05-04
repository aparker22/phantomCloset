import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSearch, updateSearchResults } from './actions';
import { getAutocomplete } from './fetch-data';

let SearchBarDumb = ({ dispatch, searchInput, searchAutocomplete }) =>
    <div>
        <input name="search-box" type="text" className="searchTerm" placeholder="What are you looking for?"
            value={searchInput} onChange={(event) => {
                dispatch(updateSearch(event.target.value));
                if (event.target.value) {
                    getAutocomplete(event.target.value)
                    .then(results => dispatch(updateSearchResults(results)));
                } else {
                    dispatch(updateSearchResults([]));
                }
            }} />
        <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
        </button>
        <ul className="setListDropdownMenu">
            {
                searchAutocomplete.map(result =>
                    <Link to={'/cards/' + result}>{result}</Link>
                )
            }
        </ul>
    </div>

let mapStateToProps = (state) => {
    return { searchInput: state.searchInput,
             searchAutocomplete: state.searchAutocomplete };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let SearchBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBarDumb);

export default SearchBar;