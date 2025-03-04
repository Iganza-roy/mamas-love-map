// src/components/ImpactMap.jsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom heart icon for the map
const heartIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function ImpactMap() {
  // State for map tributes
  const [tributes, setTributes] = useState(() => {
    const saved = localStorage.getItem('momTributes');
    return saved ? JSON.parse(saved) : [];
  });

  const [newTribute, setNewTribute] = useState({
    lat: null,
    lng: null,
    name: '',
    message: '',
    author: '',
  });

  // Save tributes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('momTributes', JSON.stringify(tributes));
  }, [tributes]);

  // Function to handle adding a new tribute on map click
  const handleMapClick = (e) => {
    setNewTribute({
      ...newTribute,
      lat: e.latlng.lat,
      lng: e.latlng.lng,
    });
  };

  // Function to add tribute
  const addTribute = () => {
    if (newTribute.lat && newTribute.message) {
      setTributes([
        ...tributes,
        {
          ...newTribute,
          id: Date.now(),
        },
      ]);
      setNewTribute({
        lat: null,
        lng: null,
        name: '',
        message: '',
        author: '',
      });
    }
  };

  return (
    <section
      id='impact-map'
      className='py-16 px-4 bg-gradient-to-b from-white to-pink-50'
    >
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4'>
          Mother's Impact Map
        </h2>
        <p className='text-center text-gray-700 mb-12 max-w-3xl mx-auto'>
          Add your tribute to the global map. Click anywhere to drop a pin and
          share a message about the mother figure who impacted your life.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Map */}
          <div className='lg:col-span-2 h-96 lg:h-auto bg-white rounded-lg shadow-lg overflow-hidden'>
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: '100%', width: '100%' }}
              whenCreated={(mapInstance) => {
                mapInstance.on('click', handleMapClick);
              }}
            >
              <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {tributes.map((tribute) => (
                <Marker
                  key={tribute.id}
                  position={[tribute.lat, tribute.lng]}
                  icon={heartIcon}
                  className='tribute-marker'
                >
                  <Popup>
                    <div className='text-center'>
                      <p className='font-bold text-purple-800'>
                        {tribute.name || 'Wonderful Mother'}
                      </p>
                      <p className='my-2'>{tribute.message}</p>
                      {tribute.author && (
                        <p className='text-sm text-gray-600'>
                          — {tribute.author}
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Tribute Form */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold text-purple-800 mb-4'>
              Add Your Tribute
            </h3>

            {newTribute.lat ? (
              <div className='mb-4 p-3 bg-green-100 text-green-800 rounded-md'>
                Pin dropped at latitude: {newTribute.lat.toFixed(4)}, longitude:{' '}
                {newTribute.lng.toFixed(4)}
              </div>
            ) : (
              <p className='mb-4 text-gray-700'>
                Click on the map to drop a pin where your mother figure made an
                impact.
              </p>
            )}

            <div className='space-y-4'>
              <div>
                <label className='block text-gray-700 font-medium mb-2'>
                  Her Name (Optional)
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'
                  placeholder='Mom, Grandma, Aunt...'
                  value={newTribute.name}
                  onChange={(e) =>
                    setNewTribute({ ...newTribute, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className='block text-gray-700 font-medium mb-2'>
                  Your Tribute
                </label>
                <textarea
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-24'
                  placeholder='Share how she impacted your life...'
                  value={newTribute.message}
                  onChange={(e) =>
                    setNewTribute({ ...newTribute, message: e.target.value })
                  }
                />
              </div>

              <div>
                <label className='block text-gray-700 font-medium mb-2'>
                  Your Name (Optional)
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'
                  placeholder='Your name or initials'
                  value={newTribute.author}
                  onChange={(e) =>
                    setNewTribute({ ...newTribute, author: e.target.value })
                  }
                />
              </div>

              <button
                className='w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                onClick={addTribute}
                disabled={!newTribute.lat || !newTribute.message}
              >
                Add Tribute to Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactMap;
