var, let, and const are three different ways for declaring a variable.

var:-
. Used from the early days of Js
. Global or function scope (They can be accessed anywhere within the function in which they are defined)
. Can be reassigned
. can be redeclared

let:-
. this keyword was introduced in ES6 2015
. Block scope (They can be accessed only within the braces '{}')
. Can be reassigned
. can't be redeclared

const:-
. this keyword was introduced in ES6 2015
. Block scope (They can be accessed only within the braces '{}' )
. Can't be reassigned
. can't be redeclared 

/***********************************************\

a_Hoisting.js  -- is a js mechanism where variable and function declaration are moved to the top of their containing scope during compilation phase, before code execution
. var declaration hoists the variable by initializing with undefined
. let & const declaration hoists the variable but are not initialized  
. function declaration are hoisted entirely (means the defination is also available as whole)



b_TDZ.js   -- a variable exists but it cannot be accessed until it is not declared. 
             this prevents the variable from being used or accessed before a value is assigned to it.


c_closures.js  -- this is a feature of js where an inner functions has access to the outer function's    
               variable and scope even after outer function has returned or has been executed.
               through this we can achieve data privacy, encapsulation, avoid global scope polluting





