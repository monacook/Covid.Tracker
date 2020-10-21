import React from 'react';
import axios from 'axios';
import { Table, Thead, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Tables from '../components/table';
import './App.css';

class App extends React.Component {
   constructor(){
    super();
    this.state= {
      error: null,
      isLoaded: true,
      countries: []
    };
  }  
  
 async getCountries() {
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
            this.setState({ countries: response.data.response, isLoaded: false});
            console.log(this.state.countries);
            console.log(this.state.isLoaded); 
          })
          .catch((error)=>{
            console.log(error)
          })
 }
  componentDidMount() {
      this.getCountries()
      }
    
    render() {
      const { countries } = this.state
        return (
          <container className="ui center aligned header">
            <h1>Covid-19 Tracker</h1>
            <p>Welcome to the Covid-19 Tracker. A simple and straight forward tracker that pulls the latest updates of recent cases around the world. 
            <p>Boxes that are not filled in yet have not reported any new updates.</p></p>
            {this.state.isLoaded || !countries ? (
              <p className="loading">Loading...</p>
             ) : (
            <Table className="ui single line table"> 
              <Thead>
                  <Tr>
                      <Th>Country</Th>
                      <Th>New Cases</Th>
                      <Th>Active</Th> 
                      <Th>Critical</Th>
                      <Th>Recovered</Th>
                      <Th>New Deaths</Th>
                      <Th>Total Deaths</Th>
                      <Th>Total Cases</Th>
                      <Th>Total Tests</Th>
                      <Th>Last Updated</Th>
                  </Tr>
              </Thead>
              {countries.map(country => {
              return (
                <Tables 
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
                  lastUpdated={country.time}
                />
                )})}
              </Table> 
              )}
          </container>
        )
    }
}
        

export default App;