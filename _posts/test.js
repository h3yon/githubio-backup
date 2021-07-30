console.log(a); // undefined
f1(); // undefined
console.log(f2); // undefined
// f2(); // TypeError: f2 is not a function
function f1() {
  var b = 5;
  console.log(b);
}
var f2 = function () {
  var c = 7;
  console.log(c);
};
var a = 10;
