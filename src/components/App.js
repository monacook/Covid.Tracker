import React from 'react';
import axios from 'axios';
import './App.css'

class App extends React.Component {
   constructor(){
    super();
    this.state= {
      error: null,
      isLoaded: false,
      updated: []
    };
  }  

    componentDidMount() {
    axios({
      "method":"GET",
      "url":"https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_in_united_states_worldometers_latest.php",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"coronavirus-monitor-v2.p.rapidapi.com",
      "x-rapidapi-key":"***************************************"
          }
        })
         .then((response)=>{
           this.setState({ updated: response.data });
            // console.log(this.state);
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
                    {this.state.updated.map((update, index) => 
                      <tr key={index}>
                        <td>{update.state_name}</td>
                        <td>{update.total_cases}</td>
                        <td>{update.new_cases}</td>
                        <td>{update.total_deaths}</td>
                        <td>{update.new_deaths}</td>
                        <td>{update.active_cases}</td>
                        <td>{update.record_date}</td>
                      </tr>
                    )}
                    </tbody>
                  </table>
          </container>
        )
  }
}

export default App;