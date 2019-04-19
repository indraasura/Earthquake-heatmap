import React, { Component } from 'react'
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'


const TOKEN = 'pk.eyJ1IjoiaW5kcmFhc3VyYSIsImEiOiJjanVudXFubXIybnl1NGFxajl4NnhqMmxxIn0.AHypC9nLffvVIXp2WW8REw'

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px',
}

class Heatmap extends Component {

    constructor(props) {
        super(props);
        this.state = {
          viewport: {
            latitude: 22.719568,
            longitude: 22.719568,
            zoom: 1.8,
            bearing: 0,
            pitch: 0,
            width: '100%',
            height: 690,
          },
          popupInfo: null
        };
        this.renderPopup = this.renderPopup.bind(this)
      }
     
    renderPopup(){
        return this.state.popupInfo && (
            <Popup tipSize={5}
              anchor="bottom-right"
              longitude={this.state.popupInfo.state.longitude}
              latitude={this.state.popupInfo.state.latitude}
              onClose={() => this.setState({popupInfo: null})}
              closeOnClick={true}>
              <p>POPUP INFO HERE</p>
            </Popup>
          )
    }
    render() { 
        const { viewport } = this.state
        return ( 
            <MapGL
        {...viewport}
        mapStyle="mapbox://sprites/mapbox/satellite-v9"
        mapboxApiAccessToken={TOKEN} >
        {this.renderPopup()}
        <div className="nav" style={navStyle}>
          <NavigationControl/>
          <Marker longitude={this.state.viewport.longitude} latitude={this.state.viewport.latitude}>
          </Marker>
        </div>
      </MapGL>
         );
    }
}
 
export default Heatmap;