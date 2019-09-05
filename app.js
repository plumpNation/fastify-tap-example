const Fastify = require('fastify')

function buildFastify () {
  const fastify = Fastify({
    logger: true
  })

  // Declare a route
  fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  })

  return fastify
}

module.exports = buildFastify
