const { default: axios } = require("axios");
var Promise = require("bluebird");
var fs = require("fs");
Promise.promisifyAll(fs);

var myFile = "input.txt";
fs.readFileAsync(myFile, "utf8")
  .then(function (txt) {
    // txt = txt + "\nAppended something!";
    // fs.writeFile(myFile, txt, function () {});
    // return txt;
    return axios.get("https://run.mocky.io/v3/1f3919a5-be46-46e5-8d59-17fbe300d200");
  })
  .then(function ({ data }) {
    return axios
      .get("https://run.mocky.io/v3/0e8fb880-79e7-4fbb-9193-61883f8bfd71?mocky-delay=10000ms")
      .then((response2) => {
        return { data1: data, data2: response2.data };
      });
  })
  .then(function ({ data1, data2 }) {
    return axios
      .get("https://run.mocky.io/v3/3996d817-ec3d-4301-bd9c-994195198b9e?mocky-delay=5000ms")
      .then((response3) => {
        return { data1, data2, data3: response3.data };
      });
  })
  .then(function ({ data1, data2, data3 }) {
    console.log(data1, data2, data3);
  })
  .catch(function (err) {
    console.log(err);
  });
