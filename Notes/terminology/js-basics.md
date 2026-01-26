1. ARROW FUNCTIONS 
====================

function add(a, b){
let sum = a+b;
console.log(sum);
}
add(2, 3);//Output: 5   ---> Normal function
                        ---> Uses the classic function keyword.
                        ---> exported by export default
----------------------------------------------------------------
const sub = (x, y)=>{
let sub = x-y;
  console.log(sub);
}
sub(5, 3);//Output: 2   ---> Arrow function
                        ---> Uses ES6 arrow syntax.
                        ---> Exported by export
-----------------------------------------------------------------

2. Ternary Operators
=====================
//Use of ternary operators 
--> basically short form of if-statement.
//To check wheather you are Adult or Minor
let age = 28;
let status = age>=18 ? "Adult" : "Minor"
console.log(status)//Adult
//To check wheather you passed or failed
let score = 40;
let result = score>=27 ? "Pass" : "Fail"
console.log(result);//Pass
//To check wheather are senior citizen or not
age = 45;
let jobStatus = age>=60 ? "Retire" : "Active"
console.log(jobStatus)//Active

---------------------------------------------------------
3. Recursion Functions 
========================
Recursion = a function that solves a problem by reducing it into a smaller version of the
same problem.
