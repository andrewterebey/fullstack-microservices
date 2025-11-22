import Fastify from 'fastify';

const app = Fastify({
    logger: true
});

app.get('/users', async function() {
    return [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Jane Smith'}
    ];
});

app.get('/users/:id', async function(request) {
    const { id } = request.params as any;
    return {id, name: `User ${id}`};
});

async function start() {
    await app.listen({port: 4001});
    console.log('User Service is running on port 4001');
}

start();