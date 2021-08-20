const express = require('express');
const router = express.Router();
const axios = require('axios')
const WEATHER_API = process.env.WEATHER_API
const {promises: {readFile}} = require("fs");
const path = require('path')

router.get("/read/:filename", function(req, res){
    filePath = path.join(__dirname, `../../${req.params.filename}.txt`);
    readFile(filePath, {encoding: 'utf-8'})
    .then((data)=>{
        return res.status(200).send(data)
    })
    .catch((err)=>{
        if (err.code == "ENOENT"){
            return res.status(404).json("Text file not found.")
        } else {
            return res.status(500).json("Unexpected error occured.")
        }
    })
})

// Endpoint for exercise #1, recieves a city in URL and returns lat, long and temp of that city using openweathermap.org
router.get('/weather/:city', function (req, res) {
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