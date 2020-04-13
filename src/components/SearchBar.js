import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            info:''
        }
    }

onFormSubmit = e => {
    e.preventDefault(); // to not automatically submit
    this.props.onSubmit(this.state.info);
    // console.log(this.state.info);
    
}
 
onInputChange = e => {
    this.setState({
        info: e.target.value
    });
    console.log(e.target.value)
}


render() {
    return (
        <div className="ui loading search">
        <form onSubmit={this.onFormSubmit}>
            <input 
            type="text" 
            placeholder="ex. USA..." 
            value={this.state.info}
            onChange={e => this.setState({ info: e.target.value})}
            />
            <i className="search icon"></i>
            <div className="results">
            </div>
        </form>
    </div>
    );
 }
 }

export default SearchBar;

// now that our searchBar is created. onsubmit when the user clicks enter have it send to the app to display and pull data 