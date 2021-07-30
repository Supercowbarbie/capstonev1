
const axiosInstance= {
    baseURL: process.env.REACT_APP_WEATHER_API_URL,
    key: process.env.REACT_APP_WEATHER_API_KEY,
    days: '5',
    q: '98112',
    aqi: 'yes',
    alerts: 'yes'
};

export default axiosInstance;