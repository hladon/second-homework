import Joi from 'joi';
import saveUser from '../service/create.js';

export default function save(req, res) {
  const userSchema=Joi.object({
    login: Joi.string().required(),
    password: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/)
        .required(),
    age: Joi.number().integer().max(130).min(4).required(),
  });
  const user = req.body;
  const userValidation=userSchema.validate(user);
  if (userValidation.error) {
    res.status(403).send(userValidation.error.details);
    return;
  }
  saveUser(userValidation).then((outpoot)=>{
    res.send(outpoot);
  });
};
