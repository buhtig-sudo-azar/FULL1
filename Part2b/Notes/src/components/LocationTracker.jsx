import { useState, useEffect } from 'react'

export default function LocationTracker() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Получаем текущее местоположение пользователя только один раз
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
        error => console.error('Ошибка при получении местоположения:', error)
      );
    } else {
      console.error('Геолокация не поддерживается');
    }
  }, []);

  if (!location) {
    return <div>Определение местоположения...</div>;
  }

  return (
    <>
      <p>Широта: {location.latitude}</p>
      <p>Долгота: {location.longitude}</p>
    </>
  );
}


