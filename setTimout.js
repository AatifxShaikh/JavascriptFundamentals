console.log("Output right away");

function a() {
    console.log("This is passed in the setTimeout")
}
setTimeout(() => {
    a()
}, "1")

console.log("should be diaplayed after the settimeout")

console.log("Printing number after each second")

function PrintNumbers() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);

        }, 1000 * i)
    }
    //The expected output of this function should be that it prints the value of i with the delay multiplied by its value so basically it will take one seconds to print the value of 1 , 2 seconds for the value of 2 respectively.
    //But this doesnt not happen instead the output is 6,6,6,6,6 which doesnt make sense.
    //This is usually caused by closures around 5 copies of setTimeout is created and all these copies points to the reference of i but since js runs synchronously the for loop will not wait for setTimeOut therefor the value of i will exceeds the loop and 5 times 6 is printed.


    //if we use the let keyword this error wont happen as let has its own memory scope and thus it will make around 5 copies of i instead of having one thus it allows setTimout to point at 5 different memory spaces which allows it to have 5 different values

}
//PrintNumbers()

//there is another way of doing it without let and use VAR
function NumbersInSequence() {
    for (var i = 1; i <= 5; i++) {
        function closure(i) {
            setTimeout(() => {
                console.log(i)
            }, 1000 * i)
        }
        closure(i)
    }
}
NumbersInSequence()
