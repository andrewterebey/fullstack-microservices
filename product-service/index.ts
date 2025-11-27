import { buildApp } from './src/app';

async function start() {
    const app = buildApp();
    await app.listen({ port: 4002 });
    console.log("Product Service running on http://localhost:4002")
}

start()