import React from 'react';

import SearchBar from './SearchBar';

class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Covid Tracker</h1>
            <p>To search more about covid and where it is. Search a country and it will give you more information.</p>
            <form>
              <SearchBar />
            </form>
          </div>
        )
    }
}

export default App;