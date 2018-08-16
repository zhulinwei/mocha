const app = require('./server');
const request = require('supertest');

describe('登陆首页', () => {
  // 设置超时时间
  this.timeout(10000);
  // 一般建议这步放在钩子中完成
  // 特别注意：agent中的值应该是app.listen的返回值，而不是app
  const agent = request.agent(app.listen(3452));
  it('正常登陆', (done) => {
    agent.get('/')
      .expect(200, done);
  });
});
