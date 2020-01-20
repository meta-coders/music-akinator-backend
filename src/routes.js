'use strict';

const routes = async (fastify, options) => {
  fastify.get('/stub', async (request, reply) => ({ hello: 'world' }));
};

module.exports = routes;
