import React, { useEffect, useState } from 'react';

const GeoLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

//   if (!location) {
//     return <div>Loading...</div>;
//   }



  return (
    <div>
      <h3>Your Location</h3>
      <p>Latitude: {location?.latitude ?? 'N/A'}</p>
<p>Longitude: {location?.longitude ?? 'N/A'}</p>
    </div>
  );
};

export default GeoLocation;
