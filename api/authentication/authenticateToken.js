import { SECRET } from '../authentication/config/index.js';
import jwt from 'jsonwebtoken';

export default async function authenticateToken(token) {
    return jwt.verify(token, SECRET, (err, user) => {
        if (err) {
            return false;
        }
        return user;
    });
}