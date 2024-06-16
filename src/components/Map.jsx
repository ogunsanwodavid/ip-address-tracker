import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import customMarker from "../assets/icon-location.svg";
import { Icon } from "leaflet";
import { useEffect } from "react";

function Map({ lat, lng }) {
  let markerIcon = new Icon({
    iconUrl: customMarker,
    iconRetinaUrl: customMarker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [40, 45],
  });

  return (
    <MapContainer
      className="w-full h-full"
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <Marker position={[lat, lng]} icon={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <ChangeCenter lat={lat} lng={lng} />
    </MapContainer>
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
