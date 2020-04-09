import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      error: null,
      isLoaded: false,
      countries_stats: []
    };
  }  

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
          this.setState({
            isLoaded:true,
            items:response.countries_stats
          })
          console.log("response" + response);
        })
        .catch((error)=>{
          this.setState({
            isLoaded: true,
            error
          })
          console.log("error" + error)
        })
      }
      
    render() {
      const { error, isLoaded, countries_stats } = this.state;
      if(error) {
        return <div>Error: {error.message}</div> 
      } else if(!isLoaded) {
        return <div className="ui segment"><div className="ui active transition visible inverted dimmer">
        <div className="content"><div className="ui medium text loader">Loading...</div></div>
        </div>
        </div>
      } else {
        return (
          <container className="ui center aligned header">
            <h1>Covid-19 Tracker</h1>
            <p>To search more about covid and where it is. Search a country and it will give you more information.</p>
              <SearchBar />
                <ul>
                  {countries_stats.map(countries_stat =>(
                    <li key={countries_stat.text}>
                    
                    </li>
                  ))}
                </ul>
          </container>
        )
    }
    }
}

export default App;