// Write your code below
import {Stack} from './stack.js';
let myStack = new Stack();

function strSizeIsEven(str) {
    return str.length % 2 === 0;
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
                myStack.clear();
                return false;
            }
        }
    } else {
        for(let i = halfStrSize + 1; i < str.length; ++i) {
            if(str[i] === myStack.pop()) {
                continue;
            } else {
                myStack.clear();
                return false;
            }
        }
    }

    return true;
}