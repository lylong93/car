import newsapi from './newsapi';
const superagent = require('superagent');
const router = require('koa-router')();

const SUCCESS = 0;
const ERR = 1;

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
module.exports = router