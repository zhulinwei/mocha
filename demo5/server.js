const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.status = 200;
})

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
