import Fastify from 'fastify';
import productRoutes from './routes/productRoutes';
export function buildApp() {
    const app = Fastify({ logger: true })
    app.register(productRoutes);
    return app
}