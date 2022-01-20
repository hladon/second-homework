import { SECRET } from '../../../config/index.js';
import jwt from 'jsonwebtoken';

export default async function authentikateToken(token) {
    return jwt.verify(token, SECRET, (err, user) => {
        if (err) {
            return false;
        }
        return user;
    });
}