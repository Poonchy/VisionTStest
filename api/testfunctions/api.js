const express = require('express');
const router = express.Router();
const axios = require('axios')
const WEATHER_API = process.env.WEATHER_API

// Endpoint for exercise #1, recieves a city in URL and returns lat, long and temp of that city using openweathermap.org
router.get('/:city', function (req, res) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${WEATHER_API}`)
    .then((results)=>{
        return res.status(200).json({
            latitude: results.data.coord.lat,
            longitude: results.data.coord.lon,
            temperature: `${Math.round(((results.data.main.temp-273.15)*1.8)+32)}°F`
        })
    })
    .catch((err)=>{
        return res.status(err.response.status).json(err.response.data.message)
    })
});

module.exports = router