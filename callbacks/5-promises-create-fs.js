const fs = require("fs");

// fs.readFile(__filename, function cb(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("File data is", data);
//   }
// });

function readFilePromise() {
  const prom = new Promise((resolve, reject) => {
    fs.readFile(__filename, function cb(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return prom;
}

readFilePromise()
  .then((data) => {
    console.log("File data is", data);
  })
  .catch((err) => {
    console.log("Error", err);
  });

console.log("TEST");