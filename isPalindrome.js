// Write your code below
import {Stack} from './stack.js';
let myStack = new Stack();

function strSizeIsEven(str) {
    str.length / 2 === 0 ? true : false;
}

function isPalindrome(str) {
    str = String(str);
    const halfStrSize = Math.floor(str.length / 2);
    for(let i = 0; i < halfStrSize; ++i) {
        myStack.push(str[i]);
    }

    if(strSizeIsEven(str)) {
        for(let i = halfStrSize; i < str.length; ++i) {
            if(str[i] === myStack.pop()) {
                continue;
            } else {
                return false;
            }
        }
    } else {
        for(let i = halfStrSize + 1; i < str.length; ++i) {
            if(str[i] === myStack.pop()) {
                continue;
            } else {
                return false;
            }
        }
    }

    return true;
}

console.log(isPalindrome('Hannah'));
console.log(isPalindrome('hanah'));
console.log(isPalindrome('racecar '));
console.log(isPalindrome(12321));
console.log(isPalindrome(124289));
console.log(isPalindrome("I did , did I"));