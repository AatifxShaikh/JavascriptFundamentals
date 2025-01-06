//both let and const declarations are also hoisted and present in the temporal dead zone
console.log(b); //this will return undefined
console.log(a);// whereas this will give error
//The expected error should be that a is not defined but we get cannot acess a before initialization which mean that a is hoisted and it is present in a different memory space and is present in the temporal dead zone that is means a is also undefined during hoisting or memory initialization phase but as is not present in the global space.

let a = 100;
var b = 90;
const c = 80;
//const is even more strict than let. Var can be used to create to variables of the same name,let can be used just to define variable let a; and can assign the value later const wont allow both of these tasks.
