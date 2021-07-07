/**
 * Create a Stack with built in array and 
 * Using Push and Pop Array method to insert at the end 
 * and remove from the end Last In First Out.
*/
  const stack = [];

// stack.push('Hello')
// stack.push('World')
// stack.push('!!')
// stack.push('!!!!!')
// console.log(stack)
// console.log(stack.pop())
// console.log(stack)

// Creating a Stack class based on a linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;   }
}

class Stack {
    constructor() {
        this.first =null;
        this.last = null;
        this.size = 0;
    }
    // Add at the beginning
    push(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    // Remove from the beginning
    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--
        return temp;
    }
}

const newStack = new Stack();


// console.log(newStack
console.log(newStack.push(2))
// console.log(newStack)
console.log(newStack.push(23))
console.log(newStack.pop())
console.log(newStack)
console.log(newStack.pop())
console.log(newStack)
// console.log(newStack.push(24))
// console.log(newStack)
