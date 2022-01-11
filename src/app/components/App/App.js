import React from 'react';
import axios from 'axios';
import CityList from "../CityList";
import FlightList from "../FlightList";

class App extends React.Component {

  componentDidMount() {
    if (!localStorage.getItem('client_id')) {
      console.warn('No client_id key');
      this.getAPIToken();
    } else {
      if(new Date().getTime() > new Date(localStorage.getItem('expires_at')).getTime()) {
        console.info('update session');
        this.getAPIToken();
      } else {
        console.info('No expired yet');
      }
    }
  }
  

  getAPIToken() {
    const formData = new URLSearchParams();
    formData.append('grant_type', 'client_credentials');
    formData.append('client_id', 'LohgqPQR4R8h9xORLQBfs7Avc2CQvXKL');
    formData.append('client_secret', '89s13IbHlKi0biR8');
    axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', formData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
      .then(res => {
        localStorage.setItem('client_id', res.data.client_id);
        localStorage.setItem('token_type', res.data.token_type);
        localStorage.setItem('access_token', res.data.access_token);
        const expiresAt = new Date();
        expiresAt.setSeconds(expiresAt.getSeconds() + Number(res.data.expires_in));
        localStorage.setItem('expires_at', expiresAt);
      });
  }

  render () {
    return (<div className="container mx-auto px-4">
      <div className="grid auto-rows-max gap-4">
        <CityList />
        <FlightList />
      </div>
    </div>);
  }
}

export default App;
