/**
 * Implement a queue using two stacks
 * @desc First-In-First-Out. when enqueue, push element to stack, when dequeue, pop the deepest element up.
 *       only to use Array.push & Array.pop
 */

const Stack1 = [];
const Stack2 = [];

function Enqueue(element) {
  Stack1.push(element);
}

function Dequeue() {
  while (Stack1.length !== 0) {
    Stack2.push(Stack1.pop());
  }

  return Stack2.pop();
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
const first = Dequeue(); // a

// hidden runtime response
window.global = {
  runtimeRes: `<span>Dequeue is:</span> ${first}`
};