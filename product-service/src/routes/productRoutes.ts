import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { pool } from '../db/index';

export default async function productRoutes(app: FastifyInstance) {

    // GET all products
    app.get('/products', async () => {
        const result = await pool.query('SELECT * FROM products');
        return result.rows;
    });

    // GET product by ID
    app.get('/products/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };

        const result = await pool.query(
            'SELECT * FROM products WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return reply.code(404).send({ error: 'Product not found' });
        }

        return result.rows[0];
    });

    // CREATE product
    app.post('/products', async (
        request: FastifyRequest<{
            Body: {
                name: string;
                description?: string;
                price: number;
                stock: number;
            };
        }>,
        reply: FastifyReply
    ) => {
        const { name, description, price, stock } = request.body;

        const result = await pool.query(
            `INSERT INTO products (name, description, price, stock)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [name, description ?? null, price, stock]
        );

        return reply.code(201).send(result.rows[0]);
    });
}

// psql -U postgres
// \c -> access db > run commands