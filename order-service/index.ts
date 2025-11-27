import { buildServer } from './src/app';

async function start() {
    const app = buildServer();

    await app.listen({ port: 4003 });
    console.log('Order service running on port 4003');
}

start();
