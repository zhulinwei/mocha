const fs = require('fs');
const assert = require('assert');

describe('异步加载测试', () => {
  it('异步读取文件', (done) => {
    fs.readFile('./test.txt', (err, data) => {
      if (err) throw err;
      done();    
    })
  })
})