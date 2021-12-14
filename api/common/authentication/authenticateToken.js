import dt from '../../../config/dotenvInit.js';
import jwt from 'jsonwebtoken';

export default async function authenticateToken(token) {
    return jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return false;
        }
        return user;
    });
}
