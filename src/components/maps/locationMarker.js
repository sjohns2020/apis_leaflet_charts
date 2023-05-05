import React, {useState} from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker, useMapEvents } from 'react-leaflet'

const LocationMarker = ({position, setPosition}) => {
    
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            },
})
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
 
export default LocationMarker;