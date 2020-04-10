import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            info:''
        }
    }

onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.info);
}

changeHandler = event => {
    this.setState({
        info: event.target.value
    });
}

render() {
    return (
        <div className="ui icon input">
        <i className="search icon"></i>
        <form onSubmit={this.onFormSubmit}>
            <input 
            type="text" 
            placeholder="Search ex. USA..." 
            value={this.state.text}
            onChange={this.changeHandler}
            />
        </form>
        </div>
    )
    }
}

export default SearchBar;

// now that our searchBar is created. onsubmit when the user clicks enter have it send to the app to display and pull data 