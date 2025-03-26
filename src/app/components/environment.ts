export const environment = {
    production: window.location.hostname !== 'localhost',   // true for production, false for local
    apiUrl: window.location.hostname === 'localhost'
      ? 'http://localhost:3000/api'       // Local environment
      : 'https://your-production-url.com/api'    // Production environment
  };
  