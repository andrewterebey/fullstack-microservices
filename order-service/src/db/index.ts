import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Aater1019!",
    database: "order_service_db"
});
