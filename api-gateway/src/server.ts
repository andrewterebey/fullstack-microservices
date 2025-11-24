import fastifyHttpProxy from "@fastify/http-proxy";
import Fastify from "fastify";

// instance of Fastify
const app = Fastify({
    logger: true
});


async function buildServer() {
    // root route
    app.get("/", async () => {
        return { message: "Hello World from API Gateway" };
    });

    // proxy /users requests to user-service
    app.register(fastifyHttpProxy, {
        upstream: 'http://localhost:4001',
        prefix: '/users',
        rewritePrefix: '/users'
    });

    app.register(fastifyHttpProxy, {
        upstream: 'http://localhost:4002',
        prefix: '/products',
        rewritePrefix: '/products'
    });

    app.register(fastifyHttpProxy, {
        upstream: 'http://localhost:4003',
        prefix: '/orders',
        rewritePrefix: '/orders'
    });
}

// starts the server on port 3000 and host 
async function startServer() {
    await buildServer();

    await app.listen({ 
        port: 3000,
        host: '0.0.0.0'
    })
    console.log("API Gateway is running on port 3000");
}

// graceful shutdown
["SIGINT", "SIGTERM"].forEach(signal => {
    process.on(signal, async () => {
        console.log(`Recieved ${signal}, closing HTTP server`);
        await app.close();
        process.exit(0);
    });
});

startServer();