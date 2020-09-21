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
    };
  }  
  
    componentDidMount() {
      return this.renderGetCountryList();
    }

    renderGetCountryList() {
      axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "useQueryString":true
        }
        })
        .then((response) => {
          this.setState({ countries: response.data.response});
          console.log(this.state.countries); 
          // console.log(response);
        })
        .catch((error)=>{
          console.log(error)
        })
    }

  renderTimeUpdate() {
   const { countries } = this.state
   return   
  }


  renderCountryCases () {
    return <tbody>
    {this.state.countries.map((country, index) => (
      <tr key={index}>
        <td>{country.country}</td>
        <td>{country.cases.new}</td>
        <td>{country.cases.active}</td>
        <td>{country.cases.critical}</td>
        <td>{country.cases.recovered}</td>
        <td>{country.deaths.new}</td>
        <td>{country.deaths.total}</td>
        <td>{country.cases.total}</td>
        <td>{country.tests.total}</td>
      </tr>
    ))}
    </tbody>
  }
    
    render() {
        return (
          <container className="ui center aligned header">
            <h1>Covid-19 Tracker</h1>
            <p>Welcome to the Covid-19 Tracker. Keep track of your state and see how we are doing during these hard times.</p>
            {this.renderTimeUpdate()}
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
                    {this.renderCountryCases()}
                  </table>
          </container>
        )
    }
}

export default App;