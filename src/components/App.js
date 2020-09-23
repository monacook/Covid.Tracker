import React from 'react';
import axios from 'axios';
import Table from '../components/table';
import './App.css';

class App extends React.Component {
   constructor(){
    super();
    this.state= {
      error: null,
      isLoaded: true,
      countries: null
    };
  }  
  
  componentDidMount() {
      axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        "useQueryString": true
        }
        })
        .then((response) => {
          this.setState({ countries: response.data.response, isLoading: false});
          console.log(!this.state.countries);
          console.log(this.state.isLoading); 
        })
        .catch((error)=>{
          console.log(error)
        })
      }
  
    
    render() {
        return (
          <container className="ui center aligned header">
            <h1>Covid-19 Tracker</h1>
            <p>Welcome to the Covid-19 Tracker. Keep track of your state and see how we are doing during these hard times.</p>
            {this.state.isLoading || !this.state.countries ? (
              <p className="loading">Loading...</p>
             ) : (
            <table className="ui single line table"> 
              <thead>
                  <tr>
                      <th>Country</th>
                      <th>New Cases</th>
                      <th>Active</th>
                      <th>Critical</th>
                      <th>Recovered</th>
                      <th>New Deaths</th>
                      <th>Total Deaths</th>
                      <th>Total Cases</th>
                      <th>Total Tests</th>
                  </tr>
              </thead>
              {this.state.countries.map(country => {
              return (
                <Table 
                key={country.country}
                name={country.country}
                newCases={country.cases.new}
                active={country.cases.active}
                critical={country.cases.critical}
                recovered={country.cases.recovered}
                new={country.deaths.new}
                deathTotal={country.deaths.total}
                casesTotal={country.cases.total}
                testTotal={country.tests.total}
                />
                )})}
              </table> 
              )}
          </container>
        )
    }
}
        

export default App;