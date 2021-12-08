import getAll from '../service/getAll.js';

export default function getGroups(req, res) {
    getAll().then((output) => {
        res.send(output);
    });
}
