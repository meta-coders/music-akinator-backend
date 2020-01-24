'use strict';

const path = require('path');
const fastify = require('fastify')({
  logger: true
});

fastify.register(require('fastify-multipart'));
fastify.register(require('fastify-cors'));
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
});
fastify.register(require('./src/routes'));

fastify.listen(process.env.PORT, '0.0.0.0').catch(console.error);
