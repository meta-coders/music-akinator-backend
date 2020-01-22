'use strict';

const recognizeByHummingHandler = require('./recognizeByHumming');

const routes = async (fastify, options) => {
  fastify.post('/recognizeByHumming', recognizeByHummingHandler);
};

module.exports = routes;
