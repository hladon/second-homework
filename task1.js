const express = require('express');
const bp = require('body-parser');
const Joi = require('joi');
const app=express();
const port=3000;

app.use(bp.json());

const user1={
  id: '1',
  login: 'us1',
  password: 'us1',
  age: 6,
  isDeleted: false,
};
const user2={
  id: '2',
  login: 'us2',
  password: 'us2',
  age: 13,
  isDeleted: false,
};
const users=[user1, user2];

app.get('/', (req, res) => {
  let userId =findById(req.query.id);
  if (userId===undefined) {
    userId='Such user don`t exist';
  }
  if (userId.isDeleted==true) {
    userId='Such user don`t exist';
  }
  res.send(userId);
});

app.get('/users', (req, res) => {
  const subString =req.query.sub;
  const limit =req.query.limit;
  let suggestedUsers=getAutoSuggestUsers(subString, limit);
  if (suggestedUsers===undefined) {
    suggestedUsers='There is no apropriate results';
  }
  res.send(suggestedUsers);
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
    res.status(404).send(userValidation.error.details);
    return;
  }
  const userId =findIndexById(user.id);
  if (userId===-1) {
    user.isDeleted=false;
    users.push(user);
    res.send('New user saved'+JSON.stringify(user));
  } else {
    user.isDeleted=false;
    users[userId]=user;
    res.send('User updated'+user);
  }
});

app.delete('/', (req, res) => {
  const userId =findById(req.query.id);
  const user=users[userId];
  user.isDeleted=true;
  users[userId]=user;
  if (userId===undefined) {
    res.send('Such user don`t exist');
  }
  res.send('User deleted');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function getAutoSuggestUsers(subString, limit) {
  const results=[];
  users.forEach((value)=>{
    if (value.login.includes(subString)) {
      results.push(value);
    }
  });
  results.sort((a, b)=>{
    if (a.login>b.login) {
      return 1;
    }
    if (a.login<b.login) {
      return -1;
    }
    return 0;
  });
  if (results.length<=limit) {
    return results;
  }
  return results.slice(0, limit-1);
}
function findById(id) {
  function equalId(value) {
    return value.id==id;
  }
  return users.find(equalId);
}

function findIndexById(id) {
  function equalId(value) {
    return value.id==id;
  }
  return users.findIndex(equalId);
}
