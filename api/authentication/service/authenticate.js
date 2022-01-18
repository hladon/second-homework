import jwt from 'jsonwebtoken';
import { SECRET } from '../../../config/index.js'
import getByLogin from '../../user/repository/getByLogin.js';

export default async function login(username, password) {
    return await getByLogin(username).then((output) => {
        if (output === null || output.password !== password) {
            return null;
        }
        return jwt.sign({ name: username }, SECRET);
    });
}