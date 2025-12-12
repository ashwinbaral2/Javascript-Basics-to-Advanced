/*
1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
// to show current date and day
const todayDate = new Date().toDateString();
console.log(`Today is: ${todayDate}`); 

// to show current time and date
const todayTime = new Date().toLocaleString();
console.log(`Today is : ${todayTime}`);

var dd = new Date().getDate();
console.log(dd);//12--value changes

var mm = new Date().getMonth() + 1;//added 1 as index-value
console.log(mm)//Output : 12--value changes

var yyyy = new Date().getFullYear();
console.log(yyyy);//Output : 2025--value changes

console.log(`Today's Date is ${dd}/${mm}/${yyyy}`)
//"Today's Date is 12/12/2025"

