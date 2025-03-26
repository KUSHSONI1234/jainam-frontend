export const environment = {
    production: window.location.hostname !== 'localhost',   // true for production, false for local
    apiUrl: window.location.hostname === 'localhost'
      ? 'http://localhost:4200/api'       // Local environment
      : 'https://jainam-backend.onrender.com'    // Production environment
  };
  