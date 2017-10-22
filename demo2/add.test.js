const add = require('./add.js');
const assert = require('assert');

describe('加法函数的测试', () => {
  before(() => {
    console.log('before')
  });

  after(function () {
    console.log('after.');
  });

  beforeEach(function () {
    console.log('beforeEach:');
  });

  afterEach(function () {
    console.log('afterEach.');
  });

  it('1加1应该等于2', () => {
    assert.equal(add(1, 1), 2);
  });

  it('任何数加0都应该等于自身', () => {
    assert.equal(add(1, 0), 1);
  })
})