import newsapi from './newsapi';

const router = require('koa-router')();

router.get('/', async(ctx, next) => {
  const data = await newsapi.get();
  // const data = [{ title: 'ok' }, {}, '3']
  ctx.body = data;
});

module.exports = router
