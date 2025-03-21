import {StationData} from "../utils/types.ts";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {customMapIcon} from "../assets/MapMarkerIcon.ts";
import '../assets/mapStyle.css'
import MapPopover from "../common/MapPopover.tsx";
import MarkerClusterGroup from "react-leaflet-markercluster";

interface StationListProps {
    stations?: StationData[]
}

const OsloMap = (data: StationListProps) => {
    return (
        <MapContainer
            center={[59.9139, 10.7522]}
            zoom={13}
            style={{width: "100%", height: "100%"}}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MarkerClusterGroup>
                {data.stations &&
                    data.stations.map((station) => (
                        <Marker
                            key={station.station_id}
                            position={[station.lat, station.lon]}
                            icon={customMapIcon}
                        >
                            <Popup className="clean-popup">
                                <MapPopover
                                    address={station.address}
                                    num_bikes_available={station.num_bikes_available}
                                    num_docks_available={station.num_docks_available}
                                    capacity={station.capacity}
                                />
                            </Popup>
                        </Marker>
                    ))}
            </MarkerClusterGroup>
        </MapContainer>
    )
}

export default OsloMap;