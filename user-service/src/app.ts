import Fastify from 'fastify';
import userRoutes from './routes/userRoutes';
export function buildApp() {
    const app = Fastify({ logger: true })
    app.register(userRoutes);
    return app
}