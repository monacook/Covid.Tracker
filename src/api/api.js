import axios from 'axios';

class api extends React.Component {
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

      }

      