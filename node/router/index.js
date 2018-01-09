import newsapi from './news';
import userapi from './user';
const superagent = require('superagent');
const router = require('koa-router')();

const SUCCESS = 0;
const ERR = 1;
// 获取新闻
router.get('/api/news/:page/:elite', async(ctx, next) => {
  const params = ctx.params;
  const data = await newsapi.get(params);
  const body = {
    code: data != 'err' ? SUCCESS : ERR,
    data,
  }
  ctx.body = body;
});
router.get('/', async(ctx, next) => {
  const params = ctx.params;
  const data = await newsapi.get(params);
  ctx.body = data;
});
// 登录
router.get('/user/request', async(ctx) => {
  // ctx.body = ctx.request.body
  const data = await userapi.longin();
  console.log(data)
})

module.exports = router
