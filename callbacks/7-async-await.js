const fs = require('fs').promises;

function readSomething() {
  let data = fs.readFile("input.txt", "binary");
  console.log(data);
  return data;
}

readSomething().then((data) => {
  console.log(data);
});

// async function readSomething() {
//   const data = await fs.readFile("input.txt", "binary");
//   console.log(data);
// }

// console.log(readSomething());