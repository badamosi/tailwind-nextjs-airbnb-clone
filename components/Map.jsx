import { useState } from 'react';
import MapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import Image from 'next/image'



function Map({ searchResult }) {

    const [selectedLocation, setSelectedLocation] = useState({})
    
    const coordinates = searchResult.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    // get the center of all locations in the search result
    const center = getCenter(coordinates)

    const [viewPort, setViewPort] = useState({
        width: '100%', height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    return (
        <MapGL mapStyle="mapbox://styles/badamosi/ckta37xv64x7l17nsxe8pc7yy"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewPort}
            onViewportChange={(nextViewport)=>setViewPort(nextViewport)}
        >

            {searchResult.map(result => (
                <div className="" key={result.long}>
                    <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
                        <LocationMarkerIcon onClick={()=>setSelectedLocation(result)} className="h-6 text-red-400 cursor-pointer text-2xl animate-bounce" />
                    </Marker>
                    {selectedLocation.long === result.long ?
                        (
                            <Popup closeOnClick={true} className="z-40" onClose={() => setSelectedLocation({})}
                                longitude={result.long}
                                latitude = {result.lat}
                            >
                                <div className="flex flex-col h-auto w-56 z-50">
                                    <div className="relative h-36 w-full flex-shrink-0">
                                        <Image src={result.img} layout="fill" objectFit="cover" className="rounded-xl" />
                                    </div>
                                    <p className="text-lg t text-gray-800">{result.title}</p>
                                    <p className="text-right text-xs font-semibold">{result.price}</p>
                                </div>
                            </Popup>
                        ) : false}
                </div>
            ))}

        </MapGL>
    )
}

export default Map
