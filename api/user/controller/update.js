import Joi from 'joi';
import updateUser from '../service/update.js';

const userSchema=Joi.object({
  id: Joi.number().integer().required(),
  login: Joi.string().required(),
  password: Joi.string()
      .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/)
      .required(),
  age: Joi.number().integer().max(130).min(4).required(),
});

export default function update(req, res) {
  const user = req.body;
  const userValidation=userSchema.validate(user);
  if (userValidation.error) {
    res.status(403).send(userValidation.error.details);
    return;
  }
  updateUser(userValidation).then((outpoot)=>{
    res.send(outpoot);
  });
};
