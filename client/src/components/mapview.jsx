import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom modern marker icon
const customIcon = new L.DivIcon({
  className: "custom-marker",
  html: `<div class="w-4 h-4 rounded-full border-2 border-white bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-transform hover:scale-150 duration-300 backdrop-blur-sm"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

function MapView({ startups, onSelect }) {
  return (
    <div className="flex-1 h-screen relative bg-[#0a0a0a] z-0">
      <MapContainer
        center={[12.9352, 77.6245]} // Centered roughly on Koramangala
        zoom={12}
        zoomControl={false}
        style={{ height: "100%", width: "100%", background: "#000000" }}
      >
        <ZoomControl position="bottomright" />
        {/* Dark mode sleek tiles from CartoDB */}
        <TileLayer 
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {startups?.map((s) => (
          <Marker
            key={s.id}
            position={[s.lat, s.lng]}
            icon={customIcon}
            eventHandlers={{
              click: () => onSelect(s),
            }}
          />
        ))}
      </MapContainer>
      
      {/* Subtle overlay gradient to blend map edges with UI */}
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-[400]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-[400]" />
    </div>
  );
}

export default MapView;
