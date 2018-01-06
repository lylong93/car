const cheerio = require('cheerio');
const superagent = require('superagent');


const url1 = "http://travel.qunar.com/travelbook/api/index/notes?elite=false&page=2&lazy=false";
const url2 = "https://www.zhihu.com/explore";

export default function get() {
  return new Promise(function(resolve, reject) {
    superagent(url1)
      .end(function(err, res) {
        if (err) {
          console.log(err)
        } else {
          const $ = cheerio.load(res.body.data)
          const data = [];
          $('.note_ul').children().each(function(i, el) {
            let obj = {}
            obj.id = $(this).find('h2').find('a').attr('href')
            obj.title = $(this).find('h2').text()
            obj.name = $(this).find('.person').children().first().text()
            obj.pic = $(this).find('.person').children().first().attr('href')
            obj.time = $(this).find('.person').children().eq(1).text()
            obj.days = $(this).find('.person').children().eq(2).text()
            data.push(obj)
          })
          console.log(data)
          resolve($.html())
        }
      });
  })
};
