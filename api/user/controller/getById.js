import findById from '../service/getById.js';

export default function getById(req, res) {
  findById(req.query.id).then((user)=>{
    res.send(user);
  });
};
