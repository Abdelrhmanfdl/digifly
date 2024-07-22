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
import { icon, LatLngExpression } from "leaflet";
import L from "leaflet";
import "@/app/components/MapSection/styles.css";
import { useTranslations } from "next-intl";

// const redIcon = new L.Icon({
//   iconUrl:
//     "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FF0000",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   icon: redIcon,
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

export default function Map({ position, tooltipContent }: MapComponentProps) {
  return (
    <MapContainer
      center={position}
      zoom={18}
      maxZoom={18}
      scrollWheelZoom={true}
      className="w-full min-h-96 bg-gradient-to-l"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0) 0%, gray 10%, gray 90%, rgba(0,0,0,0)",
      }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
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
