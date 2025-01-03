getName()
console.log(x)
console.log(getName);
var x = 7;

function getName() {
    console.log("Namaste Javascript");

}

//how hoisting actually happens???
//In javascript before the code is executed the variable gets initialized to undefined
//Arrow functions enact as variable and get "undefined" during the memory creation phase while actually get run
//Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution
//whenever a JS program is run a global execution block is created which compromise of
//1.Memory creation
//2.Code execution
//Variable declarations are scanned and are made undefined
//function declarations are scanned and are made unavailable