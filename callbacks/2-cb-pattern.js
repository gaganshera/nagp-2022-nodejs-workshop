const fs = require("fs");

fs.readFile(__filename, function cb(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("File data is", data);
  }
});

console.log("TEST");
