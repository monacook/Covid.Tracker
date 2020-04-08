import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    //  state = { 
    //     "isLoading" : false,
    //     "results" : [],
    //     "value" : ""
    //   } 

    render() {
        return (
          <container class="ui center aligned header">
            <h1>Covid-19 Tracker</h1>
            <p>To search more about covid and where it is. Search a country and it will give you more information.</p>
            <form>
              <SearchBar />
            </form>
          </container>
        )
    }
}

export default App;