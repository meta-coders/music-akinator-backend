'use strict';

const fastify = require('fastify')();

fastify.register(require('fastify-multipart'));
fastify.register(require('./src/routes'));

fastify.listen(3000).catch(console.error);
