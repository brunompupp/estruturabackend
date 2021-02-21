'use strict';
const express = require('express');
const path = require('path');
const routes = express.Router();

routes.get('/', (req,res)=>{

  const index = path.resolve(__dirname, '..', 'public', 'index.html');

  return res.sendFile(index);

});

module.exports = routes;
