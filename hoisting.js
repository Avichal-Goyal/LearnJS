
var x;
console.log(x);

x = 10;

doStuff();
function doStuff(){
    console.log("function declared");
}
// console.log(y);
// let y = 5; it will throw an exception, it will not show undefined
// for fucntion expressions cannot be hoisted
// doThing();
// var doThing = function(){
//     console.log("function expression");
// }

let y;
console.log(y);// it will show undefined