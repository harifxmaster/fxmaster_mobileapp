import axios from 'axios';
// import Toast from 'react-native-toast-message';

// ✅ Create axios instance
const api = axios.create({
  baseURL: 'https://yourapi.com/api/v1', // replace with your base URL
  timeout: 10000, // 10 sec timeout
});

// ✅ Add request interceptor (e.g., add auth token)
api.interceptors.request.use(
  async config => {
    // Example: add bearer token if needed
    // const token = await AsyncStorage.getItem('token');
    const token = 'your_token_here';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Add other custom headers if needed
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// ✅ Add response interceptor (handle errors globally)
api.interceptors.response.use(
  response => {
    return response.data; // unwrap response
  },
  error => {
    if (error.response) {
      console.log('API error response:', error.response);

      // Example: handle common status codes
      if (error.response.status === 401) {
        // Unauthorized: you could redirect to login or refresh token
      }

      return Promise.reject({
        message: error.response.data.message || 'Something went wrong.',
        status: error.response.status,
        data: error.response.data,
      });
    } else if (error.request) {
      console.log('No response received:', error.request);
      return Promise.reject({ message: 'No response from server.' });
    } else {
      console.log('Error setting up request:', error.message);
      return Promise.reject({ message: 'Request setup error.' });
    }
  }
);

// api.interceptors.response.use(
//   res => res,
//   err => {
//     Toast.show({
//       type: 'error',
//       text1: 'Error',
//       text2: err?.response?.data?.message || 'Something went wrong.',
//     });
//     return Promise.reject(err);
//   }
// );

export default api;
