const express = require('express');
const router = express.Router();
const axios = require('axios');
const WEATHER_API = process.env.WEATHER_API;
const {
  promises: {readFile},
} = require('fs');
const path = require('path');
const {MongoClient} = require('mongodb');
const MW = require('./middleware.js');

// Endpoint for Exercise #2, recieves a file name in URL and reads file names in root directory
router.get('/read/:filename', function (req, res) {
  filePath = path.join(__dirname, `../../${req.params.filename}.txt`);
  readFile(filePath, {encoding: 'utf-8'})
    .then(data => {
      return res.status(200).send(data);
    })
    .catch(err => {
      if (err.code == 'ENOENT') {
        return res.status(404).json('Text file not found.');
      } else {
        return res.status(500).json('Unexpected error occured.');
      }
    });
});

// Endpoint for exercise #1, recieves a city in URL and returns lat, long and temp of that city using openweathermap.org
router.get('/weather/:city', function (req, res) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${WEATHER_API}`
    )
    .then(results => {
      return res.status(200).json({
        latitude: results.data.coord.lat,
        longitude: results.data.coord.lon,
        temperature: `${Math.round((results.data.main.temp - 273.15) * 1.8 + 32)}°F`,
      });
    })
    .catch(err => res.status(err.response.status).json(err.response.data.message));
});

// Endpoint for exercise #3, recieves data in body, checks if it is valid and inputs data into MongoDB
router.post('/register', MW.CheckValidRegister, function (req, res) {
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client
    .connect()
    .then(() => {
      client
        .db('test')
        .collection('devices')
        .insertOne(req.body)
        .then(() => res.status(201).json('User succesfully added'))
        .catch(() => res.status(400).json('User ID taken.'));
    })
    .catch(() => res.status(503).json('Connection unavailable.'));
});

// Endpoint for exercise #4, recieves an ID in the url and fetches data for user if found.
router.get('/get/:id', function (req, res) {
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client
    .connect()
    .then(() => {
      client
        .db('test')
        .collection('devices')
        .findOne({userId: Number(req.params.id)})
        .then(data => {
          return res.status(200).json({
            userId: data.userId,
            name: data.name,
            lastName: data.lastName,
          });
        })
        .catch(() => res.status(404).json('User not found.'));
    })
    .catch(() => res.status(503).json('Connection unavailable.'));
});

module.exports = router;
