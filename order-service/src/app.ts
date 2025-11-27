import fastify from 'fastify';
import orderRoutes from './routes/orderRoutes';

export function buildServer() {
    const app = fastify({
        logger: true
    });

    app.register(orderRoutes);

    return app;
}
