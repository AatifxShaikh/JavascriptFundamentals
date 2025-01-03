var x = 1;
a();
b();
console.log(x);

function a() {

    var x = 10
    console.log(x);
    x = 99
}
function b() {
    var x = 100
    console.log(x);
}

//output
// 10
// 100
// 1
// first the global context is instantiated and it will contain three values
// x which will have undefined it is a special keyword that usually assigned to variables during initial global context instantiation
// a() and b() is also instantiated
// after this the scope passes to the a() and a new execution context is created
// and it follows the same process x will first be undefined and then on second screening it will be 100
// after the values is logged and the scope moves out of the function the execution context is deleted
// same will happend with the b function
// and then at last the value of x will be consoled with value 1
// after this even the global context is removed