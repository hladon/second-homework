import express from 'express';
import bp from 'body-parser';

import db from 'dotenv';
import router from './api/router.js';
db.config();
const app=express();
const port=process.env.PORT;
app.use(bp.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
export {app};
