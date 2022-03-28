const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

function main() {
  readFile(__filename)
    .then((data) => {
      console.log("File data is", data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
}

main();

console.log("TEST");
