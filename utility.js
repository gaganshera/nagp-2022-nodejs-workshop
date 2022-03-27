
var counter= function(arr){
    return "There are "+arr.length+" elements in the array";
}

var adder= function(a,b){
    return `The sum is ${a+b}`;
}

var subtracter= function(a,b){
    return `The difference is ${a-b}`;
}

var pi=3.142

//This works
// exports.subtract = subtracter;
// exports.count = counter;
// exports.adder = adder;

// //This works
// module.exports.pi = pi;

//This doesn't work


module.exports = {
  count: counter,
  adder: adder,
  subtract: subtracter,
  pi: pi,
};
exports = subtracter;

// exports = module.exports = { }