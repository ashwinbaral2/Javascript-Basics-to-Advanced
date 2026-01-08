var age = 21;
var isStudent = true;
var userName = "aswin";
console.log(userName);
console.log(age);
var x = 'hey'; //used rarely in ts 
var arr = [1, 'ram'];
//functions
var add = function (a, b) {
    return a + b;
};
add(2, 3);
var adminUser = {
    name: "aswin",
    id: 2,
    age: 44,
};
//must contain all the elements in userName to satisfy typescript.
// unless you add ? to interface which makes it optional
var bhiduUser = {
    name: 'bhidu',
    id: 3
};
console.log(bhiduUser);
console.log(adminUser);
