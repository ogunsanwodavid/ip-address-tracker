import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import customMarker from "../assets/icon-location.svg";
import { Icon } from "leaflet";
import { useEffect } from "react";

function Map({ lat, lng, location }) {
  let markerIcon = new Icon({
    iconUrl: customMarker,
    iconRetinaUrl: customMarker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [40, 45],
  });

  return (
    <div className="relative h-full z-0">
      <MapContainer
        className="h-full"
        style={{
          height: "100%",
          position: "relative",
        }}
        center={[lat, lng]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <Marker position={[lat, lng]} icon={markerIcon}>
          <Popup>{location}</Popup>
        </Marker>

        <ChangeCenter lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [map, lat, lng]);
  return null;
}

export default Map;
