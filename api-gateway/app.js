// apiGateway.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Deployed Service URLs on Render
const locationServiceUrl = 'https://location-service-4dsf.onrender.com';
const weatherServiceUrl = 'https://weather-service-hngb.onrender.com';
const forecastServiceUrl = 'https://forecast-services.onrender.com';
const paymentServiceUrl = 'https://payment-service-bijq.onrender.com';

// 🌍 Location
app.get('/location', async (req, res) => {
  try {
    const response = await axios.get(`${locationServiceUrl}/location`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// 🌤️ Weather
app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get(`${weatherServiceUrl}/weather`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// 📈 Forecast
app.get('/forecast', async (req, res) => {
  try {
    const response = await axios.get(`${forecastServiceUrl}/forecast`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// 💳 Payment
app.post('/pay', async (req, res) => {
  try {
    const response = await axios.post(`${paymentServiceUrl}/pay`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: 'Payment Service failed' });
  }
});

// 🚀 Start API Gateway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🛡️ API Gateway running on http://localhost:${PORT}`);
});
