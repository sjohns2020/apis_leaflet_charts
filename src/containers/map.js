import React, {useState} from "react";
import LocationMarker from "../components/maps/locationMarker";
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import CustomMarker from "../components/maps/customMarker";

const Map = () => {

    const [position, setPosition] = useState({lat: 66, lng: -7})
    const [startPosition, setStartPosition] = useState({lat: 55.8366926, lng: -4.2716776})
    const [locations, setLocations] = useState(null)

    // handler for the home button
    const handleHome = () => {
        setPosition({lat: 55.8566926, lng: -4.2816776})
    } 

    // handler for the somewhere else button
    const handleSomewhere = () => {
        setPosition({lat: 55.8277926, lng: -4.2747776})
    } 

    // handler for event locations
    // when location button is clicked this function toggles locations state to either be null or location objects
    const toggleNearLocations = () => {
      if (locations === null) {
        setLocations([
            [{lat: 55.8377926, lng: -4.2737776}, "First Stop"],
            [{lat: 55.8355926, lng: -4.2725776}, "Second Stop"],
            [{lat: 55.8344926, lng: -4.2734776}, "Third Stop"],
            [{lat: 55.8333926, lng: -4.2713776}, "Fourth Stop"], 
            [{lat: 55.8322926, lng: -4.2742776}, "Fith Stop"] 
        ])
      }
      else setLocations(null)
    }

    // when locations are not null (see toggle function above)
    // then map over the locations provided and render a custom marker component
    let locationNodes = null;
    if (locations) {
    locationNodes = locations.map((location) => {
        return <CustomMarker key={location[1]} position={location[0]} text={location[1]} />
    })
    }

    




    return ( 

        <div>
    
            <MapContainer
                // the id="map" is very important as it give the map a height and width (see the CSS)
                // without this you would not see the map.
                id="map"
                // start position I set in state incase we want to change it dynamically later
                center={startPosition}
                zoom={13}
                scrollWheelZoom={false}>

                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* locationMarker is a compoent that is shown always but the position can change dynamically as position is saved in State */}
                <LocationMarker position={position} setPosition={setPosition} />

                {/* locationNotes are the list of markers that can be toggled on or off
                using the below button and will only render if these have a value that is not null */}
                {locationNodes}

            </MapContainer>
            
            {/* buttons */}
            <div className="center">
                <button onClick={handleHome}>Home</button>
                <button onClick={handleSomewhere}>Somewhere else</button>
                {locations ? 
                    <button onClick={toggleNearLocations}>Remove Nearby Locations</button> :
                    <button onClick={toggleNearLocations}>Add Nearby Locations</button>
                }  
            </div>
        <br/>
        </div>
    )

    }

export default Map;