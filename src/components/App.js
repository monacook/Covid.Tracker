import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      error: null,
      isLoaded: false,
      countries: []
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
           this.setState({ countries: response.data.countries_stat });
            console.log(this.state);
          })
          .catch((error)=>{
            console.log(error)
          })
        }
            
    render() {
      // const { error, isLoaded, countries } = this.state;
      // if(error) {
      //   return <div>Error: {error.message}</div> 
      // } else if(!isLoaded) {
      //   return <div className="ui segment"><div className="ui active transition visible inverted dimmer">
      //   <div className="content"><div className="ui medium text loader">Loading...</div></div>
      //   </div>
      //   </div>
      // } else {
        return (
          <container className="ui center aligned header">
            <h1>Covid-19 Tracker</h1>
            <p>To search more about covid and where it is. Search a country and it will give you more information.</p>
              <SearchBar />
                  <table className="ui single line table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Total Recovered</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.countries.map((country, index) => 
                      <tr key={index}>
                      <td>{country.country_name}</td>
                      <td>{country.cases}</td>
                      <td>{country.deaths}</td>
                      <td>{country.total_recovered}</td>
                      </tr>
                    )}
                    </tbody>
                  
                  </table>
          </container>
        )
    // }
}
}

export default App;