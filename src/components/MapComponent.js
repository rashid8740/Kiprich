"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const destinations = [
  { name: "Maasai Mara", lat: -1.5024, lng: 35.1439 },
  { name: "Amboseli", lat: -2.6527, lng: 37.2606 },
  { name: "Tsavo", lat: -2.8547, lng: 38.466 },
  { name: "Lake Nakuru", lat: -0.3031, lng: 36.08 },
  { name: "Samburu", lat: 0.5647, lng: 37.5349 },
  { name: "Diani Beach", lat: -4.2767, lng: 39.5921 },
  { name: "Mount Kenya", lat: -0.1521, lng: 37.3084 },
];

const MapComponent = () => {
  const [activeDestination, setActiveDestination] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Kenya's Top Destinations
        </h2>
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="h-[60vh] md:h-[70vh] lg:h-[80vh]">
            <MapContainer
              center={[0.0236, 37.9062]}
              zoom={6}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {destinations.map((dest) => (
                <Marker
                  key={dest.name}
                  position={[dest.lat, dest.lng]}
                  eventHandlers={{
                    click: () => setActiveDestination(dest),
                  }}
                >
                  <Popup>
                    <div className="font-semibold">{dest.name}</div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          {activeDestination && (
            <div className="p-4 bg-[#f49a25] text-white">
              <h3 className="text-xl font-bold mb-2">
                {activeDestination.name}
              </h3>
              <p>
                Latitude: {activeDestination.lat.toFixed(4)}, Longitude:{" "}
                {activeDestination.lng.toFixed(4)}
              </p>
            </div>
          )}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Click on a marker to see more information about each destination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
