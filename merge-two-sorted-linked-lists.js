/**
 * Merge two sorted linked lists
 */

function Node(data, next) {
  this.data = data;
  this.next = next;
}

// setup some nodes and connect them to each other
// the linked list looks like:
// 1 -> 3 -> 10
// 5 -> 6 -> 9
const n1 = new Node(10, null);
const n2 = new Node(3, n1);
const n3 = new Node(1, n2);
const n4 = new Node(9, null);
const n5 = new Node(6, n4);
const n6 = new Node(5, n5);

const L1 = n3;
const L2 = n6;

function merge(L1, L2) {
  // create new linked list pointer
  const L3 = new Node(null, null);
  let prev = L3;

  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }

  // once we reach end of a linked list, append the other
  // list because we know it is already sorted
  if (L1 === null) {
    prev.next = L2;
  }
  if (L2 === null) {
    prev.next = L1;
  }

  // return the sorted linked list
  return L3.next;
}

merge(L1, L2); // 1 -> 3 -> 5 -> 6 -> 9 -> 10

// hidden runtime response
window.global = {
  runtimeRes: `<span>merge(L1, L2) is </span>${merge(L1, L2)}`
};
