const assert = require('assert');
const asyncFn = require('./async');

describe('异步加载测试', () => {
  it('异步请求应该返回一个对象', async () => {
    const result = await asyncFn();
    assert.equal(typeof result, 'object');
  });
});