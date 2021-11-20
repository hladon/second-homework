import getAutoSuggestUsers from '../service/getWithParams.js';

export default function getUsers(req, res) {
  getAutoSuggestUsers(req.query.sub, req.query.limit)
      .then((output)=>{
        res.send(output);
      });
};
