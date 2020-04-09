import React from 'react';


class SearchBar extends React.Component {

render() {
    return (
        <div className="ui icon input">
        <form>
            <input 
            type="text" 
            placeholder="Search..." 
            value="" 
            />
            <i aria-hidden="true" className="search icon"></i>
        </form>
        </div>
    )
    }
}

export default SearchBar;

// now that our searchBar is created. onsubmit when the user clicks enter have it send to the app to display and pull data 