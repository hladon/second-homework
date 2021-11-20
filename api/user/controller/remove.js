import removeUser from '../service/remove.js';

export default function remove(req, res) {
  removeUser(req.query.id).then((response)=>{
    res.send(response);
  });
};
