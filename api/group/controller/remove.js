import Joi from 'joi';
import removeUser from '../service/remove.js';

const idSchema=Joi.number().integer().min(0);
export default function remove(req, res) {
  const idValidation=idSchema.validate(req.query.id);
  if (idValidation.error) {
    res.status(403).send(idValidation.error.details);
    return;
  }
  removeUser(idValidation.value).then((response)=>{
    res.send(response);
  });
};
