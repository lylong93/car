import router from './router';
const Koa = require('koa');

const app = new Koa();

app.use(router.routes());

app.listen(3000);
console.log('server in  3000...');
