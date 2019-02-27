/**
 * Find the middle element of a linked list
 */

function Node(data, next) {
  this.data = data;
  this.next = next;
}

// setup some nodes and connect them to each other
// the linked list looks like:
// (head) n5 -> n4 -> n3 -> n2 -> n1 -> null
var n1 = new Node('Hello', null);
var n2 = new Node('21', n1);
var n3 = new Node('Green', n2);
var n4 = new Node('Blue', n3);
var n5 = new Node('Daniel', n4);

// assign a node to the head which functions
// as the entry into our linked list
var head = n5;

// setup pointers to both start
// at the head of the linked list
var fastPointer = head;
var slowPointer = head;

while (fastPointer && fastPointer.next) {
  fastPointer = fastPointer.next.next;
  slowPointer = slowPointer.next;
}

slowPointer.data; // Green

// hidden runtime response
window.global = {
  runtimeRes: `<span>slowPointer.data:</span> ${slowPointer.data}`
};
