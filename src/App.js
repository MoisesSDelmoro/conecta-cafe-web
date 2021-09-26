import './App.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';

const REACT_APP_API_KEY_MAPS = `${process.env.REACT_APP_API_KEY_MAPS || "API-KEY NOT FOUND!"}`

class App extends Component {
  render() {
    return (
      <>
        <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>

      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (REACT_APP_API_KEY_MAPS)
})(App)
