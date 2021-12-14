import jwt from 'jsonwebtoken';
import dt from '../../../config/dotenvInit.js';
import getByLogin from '../../user/repository/getByLogin.js';

export default async function login(username, password) {
    return await getByLogin(username).then((outpoot) => {
        if (outpoot === null || outpoot.password !== password) {
            return null;
        }
        return jwt.sign({ name: username }, process.env.SECRET);
    });
}
