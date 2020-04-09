import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            text:''
        }
    }

submitFormHandler = e => {
    e.preventDefault();
    console.log(this.state.text);
}

changeHandler = event => {
    this.setState({
        text: event.target.value
    });
}

render() {
    return (
        <div className="ui icon input">
        <form onSubmit={this.submitFormHandler}>
            <input 
            type="text" 
            placeholder="Search..." 
            value={this.state.text}
            onChange={this.changeHandler}
            />
            <i aria-hidden="true" className="search icon"></i>
        </form>
        </div>
    )
    }
}

export default SearchBar;

// now that our searchBar is created. onsubmit when the user clicks enter have it send to the app to display and pull data 