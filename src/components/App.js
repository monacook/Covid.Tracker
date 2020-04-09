import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //       country: [],
  //     };
  //   }

  
  componentDidMount() {
    axios({
        "method":"GET",
        "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key":"ca2229d292msh780971b9b5410a8p18a7b6jsnd032a95b287f"
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
      }
      
  
    render() {
        return (
          <container className="ui center aligned header">
            <h1>Covid-19 Tracker</h1>
            <p>To search more about covid and where it is. Search a country and it will give you more information.</p>
              <SearchBar />
                <ul>
                
                </ul>
          </container>
        )
    }
}

export default App;