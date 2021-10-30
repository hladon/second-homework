import express from 'express';
import bp from 'body-parser';
import Joi from 'joi';
import {findById,getAutoSuggestUsers,saveUser,deleteUser} from './service/userService.js';
import db from 'dotenv';
db.config();
const app=express();
const port=process.env.PORT;

app.use(bp.json());
const users=[];

app.get('/', (req, res) => {
  findById(req.query.id).then((user)=>{
    res.send(user);
  });
});

app.get('/users', (req, res) => {
  getAutoSuggestUsers(req.query.sub, req.query.limit)
  .then((output)=>{
    res.send(output);
  });
});

app.post('/', (req, res) => {
  const userSchema=Joi.object({
    id: Joi.string().required(),
    login: Joi.string().required(),
    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/).required(),
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
  })
});

app.delete('/', (req, res) => {
  deleteUser(req.query.id).then((response)=>{
    res.send(response);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
