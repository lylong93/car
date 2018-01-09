import router from './router';
const Koa = require('koa');
const mongoose = require('mongoose');
// const bodyParser = require('koa-bodyparser');

const app = new Koa();

const url = 'mongodb://localhost/where';
const db = mongoose.createConnection(url);

// 连接信息
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  console.log('数据库连接')
});

app.use(router.routes());



app.listen(3000);
console.log('server in  3000...');
