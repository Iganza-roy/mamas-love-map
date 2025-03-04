import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MotherImpactMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [tributes, setTributes] = useState([]);
  const [currentTribute, setCurrentTribute] = useState({
    name: '',
    message: '',
  });

  useEffect(() => {
    if (!mapRef.current) return;

    const mapInstance = L.map(mapRef.current).setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapInstance);

    // Custom heart marker
    const heartIcon = L.divIcon({
      className: 'custom-heart-marker',
      html: '<div class="text-4xl">❤️</div>',
      iconSize: [40, 40],
    });

    mapInstance.on('click', (e) => {
      const { lat, lng } = e.latlng;
      setCurrentTribute((prev) => ({ ...prev, lat, lng }));
    });

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  const addTribute = () => {
    if (!currentTribute.message) return;

    const newTribute = {
      ...currentTribute,
      id: Date.now(),
    };

    setTributes((prev) => [...prev, newTribute]);

    // Add marker to map
    if (map && currentTribute.lat && currentTribute.lng) {
      const marker = L.marker([currentTribute.lat, currentTribute.lng], {
        icon: L.divIcon({
          className: 'custom-heart-marker animate-pulse',
          html: '<div class="text-4xl">❤️</div>',
          iconSize: [40, 40],
        }),
      }).addTo(map);

      marker
        .bindPopup(
          `
        <strong>${currentTribute.name || 'Anonymous'}</strong>
        <p>${currentTribute.message}</p>
      `
        )
        .openPopup();
    }

    // Reset current tribute
    setCurrentTribute({ name: '', message: '' });
  };

  return (
    <div id='impact-map' className='bg-[#FFFFFF] py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-[#5A189A] mb-6 text-center'>
          Global Mother's Impact Map
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <div
            ref={mapRef}
            className='h-[500px] border-4 border-[#FF69B4] rounded-lg'
          />

          <div className='bg-[#FFC0CB] p-6 rounded-lg'>
            <div className='space-y-4'>
              <input
                type='text'
                placeholder='Your Name (Optional)'
                value={currentTribute.name}
                onChange={(e) =>
                  setCurrentTribute((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                className='w-full p-3 border rounded-lg'
              />
              <textarea
                placeholder='Write a tribute to a mother figure (Max 200 characters)'
                value={currentTribute.message}
                onChange={(e) =>
                  setCurrentTribute((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                maxLength={200}
                className='w-full p-3 border rounded-lg h-32'
              />
              <button
                onClick={addTribute}
                className='w-full bg-[#5A189A] text-white py-3 rounded-full hover:bg-opacity-90 transition'
              >
                Drop Tribute Pin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotherImpactMap;
