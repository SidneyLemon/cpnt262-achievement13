// 1. Using an array method, output the elements of the following array in reverse order:

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

const reversed = arr.reverse(); {
console.log(arr);
}

// 2. Using a for loop, print all even numbers up to and including n:
const n = 22;
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22

for (let i = 2; i <n; i+=2) {
console.log(i);
}


// 3. Using a for...of loop, print the sum of all elements in the following array:

let integers = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276

let sum = 0;
for (let element of integers) 
sum += element; {
console.log(sum);
}