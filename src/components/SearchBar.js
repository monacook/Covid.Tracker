import React from 'react';

class SearchBar extends React.Component {

render() {
    return (
        <div class="ui icon focus input">
            <input type="text" placeholder="Search..." />
            <i aria-hidden="true" class="search icon"></i>
        </div>
    )
    }
}

export default SearchBar;

// now that our searchBar is created. onsubmit when the user clicks enter have it send to the app to display and pull data 