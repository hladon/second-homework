import csv from 'csvtojson';
import {createReadStream} from 'fs';
import csvWriter from 'csv-writer';
import db from 'dotenv';
db.config();
const filePath=process.env.FILE_PATH;

async function find(id) {
  let res;
  function perform(data) {
    if (data.id==id) {
      res=data;
    }
  }
  await search(perform);
  return res;
}

async function suggestUsers(subString) {
  const res=[];
  function perform(data) {
    if (data.login.includes(subString)) {
      res.push(data);
    }
  }
  await search(perform);
  return res;
}
async function save(user) {
  let status=false;
  const data=[];
  function perform(json) {
    if (json.id==user.id) {
      data.push(user);
      status=true;
    } else {
      data.push(json);
    }
  }

  await change(perform, data);
  return status;
}

async function setDeleted(id) {
  let status=false;
  const data=[];
  function perform(json) {
    if (json.id==id&&json.isDeleted==='false') {
      json.isDeleted=true;
      status=true;
    }
    data.push(json);
  }

  await change(perform, data);
  return status;
}
async function search(perform) {
  const readStream=createReadStream(filePath);
  await csv().fromStream(readStream).subscribe((json)=>{
    perform(json);
  });
}
async function change(perform, data) {
  const readStream=createReadStream(filePath);
  const createCsvWriter=csvWriter.createObjectCsvWriter;
  const writer=createCsvWriter(
      {path: filePath,
        header: [
          {id: 'id', title: 'id'},
          {id: 'login', title: 'login'},
          {id: 'password', title: 'password'},
          {id: 'age', title: 'age'},
          {id: 'isDeleted', title: 'isDeleted'},
        ],
      },
  );

  await csv().fromStream(readStream).subscribe((json)=>{
    perform(json);
  });
  await writer.writeRecords(data);
}
export {find, suggestUsers, save, setDeleted};
