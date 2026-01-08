
let age: number = 21;
let isStudent: boolean = true;
let userName: string = "aswin";
console.log(userName);
console.log(age);

let x: any = 'hey' //used rarely in ts 
let arr: any[] = [1, 'ram']


//functions
const add = (a: number,b: number): number =>{
    return a+b;
}
add(2, 3)

//object
interface userName{
    name: string;
    id : number;
    age?: number;
}

const adminUser: userName = {
    name : "aswin",
    id: 2,
    age : 44,
}
//must contain all the elements in userName to satisfy typescript.
// unless you add ? to interface which makes it optional
const bhiduUser: userName ={
    name: 'bhidu',
    id : 3
}
console.log(bhiduUser);//{ name: 'bhidu', id: 3 }
console.log(adminUser);//{ name: 'aswin', id: 2, age: 44 }
console.log(bhiduUser.age);//undefined