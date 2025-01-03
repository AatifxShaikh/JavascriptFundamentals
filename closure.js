//deep dive into closures

function outerFunction() {
    let outerVaribale = "I am from the outer scope"

    function innerfunction() {
        console.log(outerVaribale);
        // so we have defined the variable outside the function and calling it inside it 
    }
    return innerfunction
}
//console.log(outerFunction())
//the outer function return a innerfunction
//if you just call the outerFunction it will not print anything
const closureFunction = outerFunction()
closureFunction()
