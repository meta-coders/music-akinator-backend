'use strict';

const path = require('path');
const fastify = require('fastify')();

fastify.register(require('fastify-multipart'));
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
});
fastify.register(require('./src/routes'));

fastify.listen(process.env.PORT).catch(console.error);
