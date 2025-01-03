function hello() {
    console.log("Heeeeeee");

}


function functionWithParam(params) {
    console.log("message from function with params");
    hello()
}
functionWithParam(hello())

// so when you pass a function to a function first the function inside gets executed and then the actual function gets executed basically if we have a(b()) b runs and then a runs

//difference between arrow function and normal function
// you cannnot pass multiple params in arrow function using arguments keyword
// if you still wish to do that you need to use spread operator
// 2.hoisting is not possible in arrow function but can be done in normal function
// 3.this keyword behaves different in arrow function and normal function if you log this keyword in arrow function it will return [object window] where as in normal function it will return [object object]