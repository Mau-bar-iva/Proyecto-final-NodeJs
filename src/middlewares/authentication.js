import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            error: 'No se envió token'
        });
    }

    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            error: 'Formato inválido. Debe ser: Bearer TOKEN'
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            error: 'Formato inválido de token'
        });
    }

    jwt.verify(token, secret_key, (err, user) => {
        if (err) {
            return res.status(403).json({
                error: 'Token inválido o expirado'
            });
        }

        req.user = user;
        next();
    });
}