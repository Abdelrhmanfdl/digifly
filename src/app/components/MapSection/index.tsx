"use client";

interface MapComponentProps {
  position: LatLngExpression;
  tooltipContent: React.ReactNode;
}

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import "@/app/components/MapSection/styles.css";

const redIcon = new L.Icon({
  iconUrl:
    "https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/map-marker-icon.png",
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Map({ position, tooltipContent }: MapComponentProps) {
  return (
    <MapContainer
      center={position}
      zoom={18}
      maxZoom={18}
      scrollWheelZoom={true}
      className="w-full min-h-[28rem] bg-gradient-to-l"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0) 0%, gray 10%, gray 90%, rgba(0,0,0,0)",
      }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={redIcon}>
        <Tooltip
          permanent
          direction="center"
          className="welcoming-message"
          opacity={1}
        >
          {tooltipContent}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
