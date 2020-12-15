const fs = require('fs');

const readStream = fs.createReadStream('./data.txt');

let result = '';
let count = 0;

readStream.on('data', (data) => {
  result += data;
  count++;

  if (count >= 5) {
    throw new Error('aaaa')
  }
})

readStream.on('end', () => {
  console.log('result:', result);
  console.log('count:', count);
})

readStream.on('error', (err) => {
  console.log('err:', err);
})