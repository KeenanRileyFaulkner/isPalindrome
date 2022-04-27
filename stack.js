export class Stack {
    constructor() {
        this.items = [];
    }

    push(val) {
        this.items.push(val);
    }

    pop() {
        //what if stack is empty?
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    is_empty() {
        return this.items.length === 0;
    }

    print() {
        let str = '';
        for(let i = 0; i < this.items.size; ++i) {
            str += this.items[i] + " ";
        }
        return str.trim();
    }
}