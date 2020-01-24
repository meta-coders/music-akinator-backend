'use strict';

const recognizeByHummingHandler = require('./recognizeByHumming');
const recognizeByLyricsHandler = require('./recognizeByLyrics');

const routes = async (fastify, options) => {
  fastify.post('/recognizeByHumming', recognizeByHummingHandler);
  fastify.get('/recognizeByLyrics', recognizeByLyricsHandler);
};

module.exports = routes;
