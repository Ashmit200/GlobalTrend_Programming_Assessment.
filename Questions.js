// Question 1 answer
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();
// Question 2 answer
function evaluateExpression(expression) {
    return new Function('return ' + expression)();
}

console.log(evaluateExpression("3 + 5 - 2")); 
// Question 3 answer
function flattenArray(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4]]], 5])); 
//  Output: [1, 2, 3, 4, 5]
// Question 4 answer
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
// Question 5 answer
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// Question 6 answer
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeFirstLetter("hello world")); // Output: Hello World
// Question 7 answer
function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Question 8 answer
class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }
}

let myMap = new HashMap();
myMap.put("name", "Ashmit");
console.log(myMap.get("name")); // Output: Ashmit
myMap.remove("name");
console.log(myMap.get("name")); // Output: undefined
// Question 9 answer
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); 
// Output: [1, 3, 5]
// Question 10 answer
function toTitleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(toTitleCase("convert this string to title case")); 
// Output: Convert This String To Title Case


