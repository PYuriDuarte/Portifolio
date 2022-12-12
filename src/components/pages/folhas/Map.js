import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function Mapjs(){

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAGPfWel45QQci04BQxpjQnOfilwWGMvDE"
  })

  const position = {lat: -3.7177885622529905, lng: -38.57053717688322}

  return (
    <div className='map'>
      {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={position}
        zoom={14}
        >

        <Marker position={position} 
        options={{
          label: {
            text: "Estou aqui!",
            className: "mapMarkerName"
          }
        }}
        />

      </GoogleMap>
      ) : <></>}
    </div>
  )

};

export default Mapjs;