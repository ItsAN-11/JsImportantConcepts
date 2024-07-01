//////variable hoisting using : ---

// var ---

console.log(name); // undefined
var name = "Anjali";


//let:--
// console.log(course); //ReferenceError: Cannot access 'course' before initialization
let course = "BCA";


// const:--
// console.log(CGPA) // ReferenceError: Cannot access 'CGPA' before initialization
const CGPA = 8.72;

//function decalaration 
greetHello() //Hello, welcome here!!
function greetHello(){
    console.log("Hello, welcome here!!")
}

// function expression 
// sayHello(); //TypeError: sayHello is not a function
var sayHello = function () {
    console.log("Hello there!!")
}
