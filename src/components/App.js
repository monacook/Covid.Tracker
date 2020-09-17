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
      return this.renderCountryList();
    }

    renderCountryList() {
      axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "useQueryString":true
        }
        })
        .then((response)=>{
          this.setState({ countries: response.data.response});
          console.log(this.state.countries);
          // console.log(response);
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
                  <table className="ui single line table">
                    <thead>
                      <tr>
                        <th>State Name</th>
                        <th>Total Cases</th>
                        <th>New Cases</th>
                        <th>Total deaths</th>
                        <th>New Deaths</th>
                        <th>Active Cases</th>
                        <th>Last Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.countries.map((country, index) => {
                     return <tr key={index.continent}>{index.continent}
                     </tr>
                     
                        })
                      }
                    </tbody>
                  </table>
          </container>
        )
    }
}

export default App;