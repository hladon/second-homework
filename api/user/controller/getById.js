import findById from '../service/getById.js';

const idSchema=Joi.number().integer().min(0);
export default function getById(req, res) {
  const idValidation=idSchema.validate(req.query.id);
  if (idValidation.error) {
    res.status(403).send(idValidation.error.details);
    return;
  }
  findById(idValidation.id).then((user)=>{
    res.send(user);
  });
};
