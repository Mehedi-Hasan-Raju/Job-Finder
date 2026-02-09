// Get the API base URL from environment variable or use local development default
// In Vite, environment variables must be prefixed with VITE_ to be exposed to client code
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1";

// Construct API endpoints using the configurable base URL
export const USER_API_END_POINT = `${API_BASE_URL}/user`;
export const JOB_API_END_POINT = `${API_BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${API_BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${API_BASE_URL}/company`;