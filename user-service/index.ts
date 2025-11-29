import dotenv from "dotenv";
dotenv.config();

import { buildApp } from './src/app';

async function start() {
    const app = buildApp();
    await app.listen({ port: 4001 });
    console.log("User Service running on http://localhost:4001")
}

start()