// a block is a group of multiple statements that can be used where javascript expect us to run a single statement
//for example when using a if statement it expects to use a statement after condition
{
    var a = 19;
    console.log(a);

}
//this is an example of block
if (true) {
    var a = 20;
    console.log(a);

}
//block scope is all the variables and functions that we can acess inside the block
//variables defined by the let and const keyword inside a block goes into there own memory space which called block while varibales defined using the var keyword still goes to the global space. which means we cannot access the let and const variables outside the scope whereas variables with the var keyword can still be acessed outside.Also all these variables are still hoisted

//shadowing: when two variables of same name but different value are prsent the second variables will shadow the first one even if the second variable is present inside a block like var=10; {var a=90 console.log(a) which will give 90} console.log(a) which will again give 90. this works because both the variables are present in the global space and our pointing to the same memory location. If we try this with the let keyword this wont work as let and const have there own memory scope
//till now we have seen three scope the global scope the block scope and the script scope

const test = 1900;
{

    {
        console.log(test);

    }
}