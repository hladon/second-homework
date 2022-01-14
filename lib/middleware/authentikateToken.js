import verify from '../../api/authentication/authenticateToken.js'

export default function authenticateToken(req, res, next) {
    const token = req.headers.authorization;
    if (token === null) {
        return res.sendStatus(401);
    }
    verify(token).then((x) => {
        if (!x) {
            return res.sendStatus(403);
        }
        next();
    });
}