const axios = require("axios");

axios
  .get("https://run.mocky.io/v3/1f3919a5-be46-46e5-8d59-17fbe300d200")
  .then(function ({ data }) {
    console.log(data);
    return axios.get(
      "https://run.mocky.io/v3/0e8fb880-79e7-4fbb-9193-61883f8bfd71?mocky-delay=10000ms"
    );
  })
  .then(function ({ data }) {
    console.log(data);
    return axios.get(
      "https://run.mocky.io/v3/3996d817-ec3d-4301-bd9c-994195198b9e?mocky-delay=5000ms"
    );
  })
  .then(function ({ data }) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err.message);
  });
