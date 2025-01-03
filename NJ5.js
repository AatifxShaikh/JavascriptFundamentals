//window is the global object that is created the first time the JS code runs
//any code in JS which not inside in a function it is in global space
//the variables gets attached to the window object thus allow us to access it
var a = 10;
function b() {
    var x = 10;
}
console.log(window.a);//10
console.log(this.a);//10

