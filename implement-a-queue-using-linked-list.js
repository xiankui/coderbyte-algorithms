/**
 * Implement a queue using a linked list
 * @desc First-In-First-Out in linked list
 */

// queue is initially empty
// front is the linked list, back is the pointer of the last element
const Queue = { front: null, back: null };

// we will use a node to keep track of the elements
// in the queue which is represented by a linked list
function Node(data, next) {
  this.data = data;
  this.next = next;
}

// add elements to queue in O(1) time
function Enqueue(element) {
  const N = new Node(element, null);
  if (Queue.back === null) {
    Queue.front = N;
    Queue.back = N;
  } else {
    Queue.back.next = N;
    Queue.back = Queue.back.next;
  }
}

// remove first element from queue in O(1) time
function Dequeue() {
  if (Queue.front !== null) {
    const first = Queue.front;
    Queue.front = Queue.front.next;
    return first.data;
  } else {
    if (Queue.back !== null) {
      Queue.back = null;
    }
    return "Cannot dequeue because queue is empty";
  }
}

Enqueue("a");
Enqueue("b");
Enqueue("c");
const first = Dequeue(); // a

// hidden runtime response
window.global = {
  runtimeRes: `<span>Dequeue is:</span> ${first}`
};
