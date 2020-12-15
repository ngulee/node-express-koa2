
const fs = require('fs');

let str = '';

for(let i = 0; i < 500; i++) {
  str += '我是数据，我要保存 1111\n';
}

const writeStream = fs.createWriteStream('./save.txt');

writeStream.write(str);

writeStream.end();