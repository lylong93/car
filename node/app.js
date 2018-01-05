const Koa = require('koa');

const router = require('koa-router')();
const app = new Koa();
const cheerio = require('cheerio');
const superagent = require('superagent');
// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async(ctx, next) => {
//   console.log(ctx.request.path + ':' + ctx.request.method);
//   await next();
// });

const url1 = "http://travel.qunar.com/travelbook/api/index/notes?elite=false&page=2&lazy=false";
const url2 = "https://www.baidu.com";
router.get('/', (ctx, next) => {
  // return new Promise((resolve, reject) => {
  //   db.queryPage(’’, {}, 0, 20, function(rdata) {
  //     ctx.body = { success: true, pagecount: rdata.count, customers: rdata.rows };
  //     resolve();
  //   });
  // });
  // let data
  return superagent(url2)
    .end(function(err, res) {
      // 抛错拦截
      if (err) {
        console.log(err)
      } else {
        console.log(3)
        data = 'ok'
        // ctx.body = 'ok'
        // console.log(res);
        // let data = cheerio.load(res);
        // let $ = cheerio.load(res.data);
        // console.log(res.body)
      }
    });
});

app.use(router.routes());
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
