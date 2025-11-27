import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { pool } from '../db/index';

export default async function orderRoutes(app: FastifyInstance) {

    // GET all orders
    app.get('/orders', async () => {
        const result = await pool.query('SELECT * FROM orders ORDER BY id ASC');
        return result.rows;
    });

    // GET order by ID
    app.get('/orders/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };

        const result = await pool.query(
            'SELECT * FROM orders WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return reply.code(404).send({ error: 'Order not found' });
        }

        return result.rows[0];
    });

    // CREATE order
    app.post('/orders', async (
        request: FastifyRequest<{
            Body: {
                user_id: number;
                product_id: number;
                quantity: number;
                total: number;
            };
        }>,
        reply: FastifyReply
    ) => {
        const { user_id, product_id, quantity, total } = request.body;

        const result = await pool.query(
            `INSERT INTO orders (user_id, product_id, quantity, total)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [user_id, product_id, quantity, total]
        );

        return reply.code(201).send(result.rows[0]);
    });
}
