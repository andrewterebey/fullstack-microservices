import Fastify from 'fastify';

const app = Fastify({
    logger: true
});

async function start() {
    await app.listen({port: 4001});
    console.log('User Service is running on port 4001');
}

start();