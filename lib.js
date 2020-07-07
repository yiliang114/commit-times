/*
 * @Author: yiliang114
 * @Date: 2020-01-30 14:19:40
 * @LastEditors  : yiliang114
 * @LastEditTime : 2020-01-31 12:52:41
 */

let https = require('https');
let cheerio = require('cheerio');
//准备抓取的网站链接
let dataUrl = 'https://github.com/';

//根据得到的数据，处理得到自己想要的
function getData(str, nth = 0) {
  const $ = cheerio.load(str);
  const arr = $('g[transform]:last-of-type > rect:last-child');
  const target = arr[0];
  if (!arr || !arr[0]) {
    throw new Error('can not find it');
  }
  const sum = target.attribs['data-count'];
  return sum;
}

function getSum(username) {
  return new Promise((resolve, reject) => {
    if (!username) reject('username is required');
    https.get(dataUrl + username, function (res) {
      let str = '';
      //绑定方法，获取网页数据
      res.on('data', function (chunk) {
        str += chunk;
      });
      //数据获取完毕
      res.on('end', function () {
        //调用下方的函数，得到返回值，即是我们想要的img的src
        let data = getData(str);
        console.log(data);
        resolve(data);
      });
    });
  });
}

module.exports = {
  getSum,
};
