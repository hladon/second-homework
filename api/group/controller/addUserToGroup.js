import Joi from 'Joi';
import addUser from '../service/addUserToGroup.js';

const idSchema=Joi.number().integer().min(0);
export default function addUserToGroup(req, res) {
  const userId=idSchema.validate(req.query.usId);
  const groupId=idSchema.validate(req.query.grId);
  if (userId.error||groupId.error) {
    res.status(403).send(idValidation.error.details);
    return;
  }
  addUser(userId.value,groupId.value).then((report)=>{
    res.send(report);
  });
};