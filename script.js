// Javascript Morning Exercise: Loops and Functions
// ================================================

// Exercise 1
// ==========
// Generate a random integer between 1 and 10.
// Prompt the user to guess the integer.
// Use a while loop to keep asking the user to guess an integer as long as his guess is not equal to the generated integer.
// Once he guesses it correctly, end the loop.
// Hint: What's the difference between a do-while loop and a while loop?

// do {
//     var randNum = Math.floor(Math.random() * 10);
//     console.log(randNum);
//     var guess = prompt("Guess the integer generated randomly: ");
// }
// while(guess != randNum);



// Exercise 2: Reversing a String
// ==============================
// Write a function that takes a string as an argument and returns its reverse. For example, reverseString("abc defg")
// should return "gfed cba".
function reverseString(string){
    var splitString = string.split("").reverse().join("");
    console.log(splitString);
    return splitString;
}
reverseString("abc defg");






// Exercise 3
// ==========
var numArray = [3, 9, 2, 5, 3, 6, 7, 4, 8, 1, 4, 10, 21, 43, 56, 23, 54, 94, 94, 0, -2, 4, 2, 7];

// Write functions that each take an array of numbers, e.g. numArray, and...
// 1. return an array with the elements in reverse order, e.g. reverseArray([1,2,3]) should return [3,2,1]
// 2. return an array with each element of the input array multiplied by 2, e.g. double([1,2,3]) should return [2,4,6]
// 3. return the sum up all the elements of the input array, e.g. sum([1,2,3]) should return 6
// 4. return an array with only odd numbers from the input array, e.g. onlyOdd([1,2,3,4,5]) should return [1,3,5]
// 5. (Bonus) return an array where each element in this new array is the sum of the element before it and the element in its current position in the old array, e.g. the first few elements in this new array would be `[3, 12, 11, 7, 8, ...]`

//1.
// function reverseArray(array){
//     return array.reverse();
// }
// console.log(reverseArray(numArray));

//2.
// Method 1: the for loop method
// function multiplication(array){
//     var newArr = [];
//     for (var i = 0; i < array.length; i++){
//         newArr.push(array[i] * 2);
//     }
//     return newArr;
// }
// console.log(multiplication(numArray));

// Method 2:the map method
// var newArr = numArray.map(function(array){
//     return array * 2;
// });
// console.log(newArr);

//3.
// function sum (array){
//     var sumUp = 0;
//     for (var i = 0; i < array.length; i++){
//         sumUp += array[i]
//     }
//     return sumUp;
// }
// console.log(sum(numArray));

//4.
// function onlyOdd(array){
//     var newArr2 = [];
//     for (var i = 0; i < array.length; i++){
//         if (array[i] % 2 != 0){
//             newArr2.push(array[i]);
//         }
//     }
//     return newArr2;
// }
// console.log(onlyOdd(numArray));

//5.
// function addElements(array){
//     var newArr3 = [];
//     newArr3.push(array[0]);
//     for (var i = 1; i < array.length; i++){
//         newArr3.push(array[i-1] + array[i]);
//     }
//     return newArr3;
// }
// console.log(addElements(numArray));




// Exercise 4
// ==========
// Examine the phonebook below.
// Write a function that takes an object, e.g. Phonebook, that uses a loop to return an object with keys and values swapped.
var Phonebook = {
    "Aaron":    92133243,
    "Betty":    91120543,
    "Cammy":    85535657,
    "Denise":   64122423,
    "Emma":     64485690,
    "Felicia":  83323669,
    "George":   98119091,
    "Herman":   63436894,
};
function swapObject(object){ //key in for-in loop is the keys of the object
    var newObj = {};
    for (var key in object){
        newObj[object[key]] = key; //object[key] = value; car[blue] = 3;
    }
    return newObj;
}
//console.log(swapObject(Phonebook));




// Exercise 5
// ==========
// Examine the array below and the commented out loop that was written to console.log all the names from the array, starting from the last element.

var testArray = ["Alice", "Bobby", "Charles", "Daniel", "Elise", "Farnsworth", "Grace", "Horace", "Ihsan", "Jack"];

// for (var i = 0; i < testArray.length; i++) {
//     var name = testArray.pop();
//     console.log(name);
// };

// Uncomment and run the code. What is wrong with the output?
// The output only gave half of the output of the array.
// Explain the mistake in a comment on the line/lines that you think the mistake is at.
// This is because the testArray length would decrease everytime we pop. Hence the condiiton i < testArray.length would get cut to 5 instead of 10.
// Line 139
// Correct the code.

var len = testArray.length;
for (var i = 0; i < len; i++){
    var name = testArray.pop();
    console.log(name);
}



// Extra Exercise 6: Merging and Sorting Arrays
// ============================================
// Write a function that takes 2 arrays of numbers and returns a single sorted array of numbers from both arrays.
// E.g. if the input arrays were var arr1 = [3, 6, 11] and var arr2 = [2, 4, 5, 8, 9] then mergeSortArrays(arr1, arr2)
// should return [2, 3, 4, 5, 6, 8, 9, 11].











// Extra Exercise 7A:
// Use loops to console log the following pictures
// ===============================================
// .*.X.*.X.*.X.*. (This pattern continues. Your loop should be able to console.log as long a pattern as required. Each iteration of your loop should console.log only 1 character.)







// Extra Exercise 7B:
// (An equilateral triangle with sides of length 3.)
// Hint: You might need to use a loop within a loop, i.e. one loop to generate the rows, and another loop to generate the columns.
// Figure out the relationship between the locations of the *s on a row and the row numbers.
// ..*..
// .*.*.
// *****









