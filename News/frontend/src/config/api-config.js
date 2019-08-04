let backendHost;

backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:8081';

export const API_ROOT = `${backendHost}`;