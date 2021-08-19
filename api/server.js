const express = require('express')
const server = express()

server.use(express.json());

server.use("*", (_, res)=>{
    return res.status(200).json({message:"Hello!"})
})

module.exports = server