import React from "react";
import { Popup, Marker } from 'react-leaflet'

const CustomMarker = ({position, text}) => {
    
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>
            <div>
                <h2> {text}</h2>
                <hr/>
                <a href="/">link</a>
            </div>
        
        </Popup>
      </Marker>
    )
  }
 
export default CustomMarker;