import express from 'express';
import bp from 'body-parser';
import config from './config/index.js';
import router from './api/router.js';

const app=express();
const port=config.port;
app.use(bp.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
export {app};
