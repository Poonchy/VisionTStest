const express = require('express');
const server = express();
const ApiRouter = require('./testfunctions/api.js');

server.use(express.json());

server.use('/api', ApiRouter);

server.use('*', (_, res) => {
  return res.status(200).json({message: 'Hello!'});
});

module.exports = server;
