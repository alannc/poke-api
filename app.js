const Koa = require('koa');

const config = require('./src/config');
const customRouter = require('./src/router');
// const cors = require('@koa/cors');

const app = new Koa();

app.use(customRouter);
// app.use(cors);

app.listen(config.API_PORT, () => {
  console.log(`Server listening on port: ${config.API_PORT}`);
});