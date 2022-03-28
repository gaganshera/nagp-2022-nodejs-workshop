const axios = require("axios");

async function main() {
  try {
    const response1 = await axios.get(
      "https://run.mocky.io/v3/1f3919a5-be46-46e5-8d59-17fbe300d200"
    );
    console.log(response1.data);

    const response2 = await axios.get(
      "https://run.mocky.io/v3/0e8fb880-79e7-4fbb-9193-61883f8bfd71?mocky-delay=10000ms"
    );
    console.log(response2.data);

    const response3 = await axios.get(
      "https://run.mocky.io/v3/3996d817-ec3d-4301-bd9c-994195198b9e?mocky-delay=5000ms"
    );
    console.log(response3.data);
  } catch (err) {
    console.log(err.message);
  }
}

main();
