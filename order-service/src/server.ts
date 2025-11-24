import Fastify from 'fastify';

const app = Fastify({
    logger: true
});

// GET /orders → list all orders
app.get('/orders', async function () {
    return [
        { id: 1, userId: 10, productId: 2, quantity: 1, total: 1299 },
        { id: 2, userId: 12, productId: 1, quantity: 3, total: 597 }
    ];
});

// GET /orders/:id → get a specific order
app.get('/orders/:id', async function (request) {
    const { id } = request.params as any;
    return {
        id,
        userId: 99,
        productId: 5,
        quantity: 1,
        total: 200
    };
});

async function start() {
    await app.listen({ port: 4003 }); // DIFFERENT PORT
    console.log('Order Service is running on port 4003');
}

start();