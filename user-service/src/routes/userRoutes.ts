import { FastifyInstance, FastifyRequest, FastifyReply} from 'fastify';
import { pool } from '../db/index';

export default async function userRoutes(app: FastifyInstance) {

    //GET all users
    app.get('/users', async () => {
        const result = await pool.query('SELECT * FROM users')
        return result.rows;
    }); 

    //GET by ID
    app.get('/users/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as {id: string};

        const results = await pool.query(
            'SELECT * FROM users WHERE id = $1',
            [id]
        );

        if (results.rows.length === 0) {
            return reply.code(404).send({ error: 'User not found '});
        }

        return results.rows[0]
    });

    app.post('/users', async (
        request: FastifyRequest<{
            Body: {
                username: string;
                email: string;
                password: string;
                age: number;
            };
        }>,
        reply: FastifyReply) => {
            const {username, email, password, age } = request.body;
            const result = await pool.query(
                'INSERT INTO users (username, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *', [username, email, password, age]
            );

            return reply.code(201).send(result.rows[0])
    });
}