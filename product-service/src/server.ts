import Fastify from 'fastify';

const app = Fastify({
    logger: true
});

app.get('/products', async function() {
    return [
        {id: 1, name: 'Big Laptop', price: 1299},
        {id: 1, name: 'calculator', price: 67},
        {id: 1, name: 'notebook', price: 14},
    ];
});

app.get('/products/:id', async function(request) {
    const { id } = request.params as any;
    return {id, name: `Product ${id}`, price: 99};
});

async function start() {
    await app.listen({port: 4002});
    console.log('Product Service is running on port 4002');
}

start();