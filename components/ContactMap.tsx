import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  center: LatLngExpression;
  zoom: number;
  markerText: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  center,
  zoom,
  markerText,
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>{markerText}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
