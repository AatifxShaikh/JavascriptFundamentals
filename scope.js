function a() {
    console.log(b);

}
var b = 10;
a()
//even though this should logiacally give undefined as global scope and fdunction scope should be different and the function a should not be able to acess the b variable present, but if I try to console this I am getting 10. Quite strange.

//but if we do converse of this that is defined a variable b inside the function and access it through console in the global space it will give not defined as error.
//scope is directly proportional to the lexical environment
//lexical basically means hierarchy in order
//the lexical environment of a function also includes the parent scope that is the local memory along with the lexical environment of the parent
//at global level its lexical environment will point to null

//how it works
function firstParent() {

    secondaryParent()
    function secondaryParent() {
        console.log(c);

    }
}
var c = 10;
firstParent()
//the console.log is used the print the value of C and the output will be 10 JS will first check that if the variable and its value is present in scope of secondaryParent if the value is not present it will check that if the value is present in the memmory space of the firstParent this is allows it to print the value of C even tho it is not presented in the secondaryparent.
//similarly if the value is not present in the firstParent it will check the memory space of the global space.