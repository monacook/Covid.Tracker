import React from 'react';
import axios from 'axios';
import './App.css'

class App extends React.Component {
   constructor(){
    super();
    this.state= {
      error: null,
      isLoaded: false,
      countries: []
      updated: []
    };
  }  

    componentDidMount() {
    axios({
        "method":"GET",
        "url":"https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key":"ca2229d292msh780971b9b5410a8p18a7b6jsnd032a95b287f"
          }
        })
         .then((response)=>{
           this.setState({ countries: response.data.countries_stat, updated: response.data.statistic_taken_at });
            console.log(this.state);
          })
          .catch((error)=>{
            console.log(error)
          })
      }
    
    //  onSearchSubmit = async info => { 
    //     const response = await axios.get('/data/countries', { 
    //      params: { country: info }
    //   });
  
       
    //   this.setState({ countries: response.data.countries_stat });

    //    }

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
            <p>Welcome to the Covid-19 Tracker. Keep track of your country and see how we are doing during these hard times.</p>
            <p>Last Updated: {this.state.updated} (GMT)</p>
              {/* <SearchBar onSubmit={this.onSearchSubmit}/> */}
                  <table className="ui single line table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Total Recovered</th>
                        <th>New Deaths</th>
                        <th>New Cases</th>
                        <th>Serious Critical</th>
                        <th>Active Cases</th>
                        <th>Total cases per 1m Population</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.countries.map((country, index) => 
                      <tr key={index}>
                      <td>{country.country_name}</td>
                      <td>{country.cases}</td>
                      <td>{country.deaths}</td>
                      <td>{country.total_recovered}</td>
                      <td>{country.new_deaths}</td>
                      <td>{country.new_cases}</td>
                      <td>{country.serious_critical}</td>
                      <td>{country.active_cases}</td>
                      <td>{country.total_cases_per_1m_population}</td>
                      </tr>
                    )}
                    </tbody>
                  </table>
          </container>
        )
    
  }
}

export default App;