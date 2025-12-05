// ========================
//! TASK 1: Shallow copy with simple array
// ========================
//^ Instructions:
//^ 1. Create an array of numbers: [10, 20, 30]
//^ 2. Make a shallow copy using the spread operator
//^ 3. Change the first element of the copy to 99
//^ 4. Print both arrays to observe the difference

//& Your code here
// --------------------
A = [10, 20, 30]
B = [...A]
B[0]=99;
console.log(B) // [99, 20, 30]
console.log(A) // [10, 20, 30]  ← original is unchanged
//Hence, shallow copy is operable for simple array.
// ========================
//! TASK 2: Shallow copy with nested array
// ========================
//^ Instructions:
//^ 1. Create a nested array: [1, [5, 6]]
//^ 2. Make a shallow copy using the spread operator
//^ 3. Change the first element of the inner array to 99
//^ 4. Print both arrays to see what happens

//& Your code here
// --------------------
C = [1, [5, 6]]
D = [...C]
D[1][0] = 99;
console.log(C);   // [1, [99, 6]]  ← original changed!
console.log(D);   // [1, [99, 6]]  ← copy also changed


// ========================
//! TASK 3: Deep copy with nested array
// ========================
//^ Instructions:
//^ 1. Use the same array: [1, [5, 6]]
//^ 2. Make a deep copy using JSON.parse(JSON.stringify())
//^ 3. Change the first element of the inner array to 99
//^ 4. Print both arrays to see that the original remains unchanged

//& Your code here
// --------------------
X = [1, [5, 6]]
Y = JSON.parse(JSON.stringify(X));
Y[1][0]=99;
console.log(X);  // [1, [5, 6]]  ← original stays safe
console.log(Y);  // [1, [99, 6]] ← only copy changed


// ========================
//! TASK 4: Push and pop with shallow copy
// ========================
//^ Instructions:
//^ 1. Create an array: [1, 2, 3]
//^ 2. Make a shallow copy
//^ 3. Push a new element into the copy
//^ 4. Print both arrays to observe whether the original is affected

//& Your code here
// --------------------
P = [1, 2, 3]
Q = [...P]
const newVar = Q.push(9); 
console.log(P);           // [ 1, 2, 3 ]  ---> Original untouched
console.log(Q);           // [1, 2, 3, 9] ---> Q got the extra value
console.log(newVar);      // 4            ---> Push() returns the new length
            


// ========================
//! TASK 5: Mixed array experimentation
// ========================
//^ Instructions:
//^ 1. Create an array with numbers, strings, and a nested array:
//^    const arr = [1, "hello", [2, 3]]
//^ 2. Try shallow copy, deep copy, and modify elements at different levels
//^ 3. Print original and copied arrays after each modification
//^ 4. Observe which changes affect the original and which do not

//& Your code here
// --------------------
const X1 = [1, "hello", [2, 3]]
const X2 = [...X1]
const X3 = JSON.parse(JSON.stringify(X1))
X3.push(9);
console.log(X3);// [ 1, 'hello', [ 2, 3 ], 9 ]==>Deep copy 
console.log(X1);//[ 1, 'hello', [ 2, 3 ] ]==> Original unaffected
console.log(X2);//[ 1, 'hello', [ 2, 3 ] ]===> Shallow copy


