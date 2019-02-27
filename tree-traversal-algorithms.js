/**
 * Tree traversal algorithms
 */

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// create nodes
var root = new Node("A");
var n1 = new Node("B");
var n2 = new Node("C");
var n3 = new Node("D");
var n4 = new Node("E");

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;

// Pre-order push into call stack sequence
function pre_order(head, nodes) {
  nodes.push(head.data);
  if (head && head.left) {
    console.log(`%cpush left to stack - ${head.left.data}`, "color: blue;");
    pre_order(head.left, nodes);
  }
  if (head && head.right) {
    console.log(`%cpush right to stack - ${head.right.data}`, "color: green;");
    pre_order(head.right, nodes);
  }
  return nodes;
}

const pre_order_res = pre_order(root, []); // ["A", "B", "D", "E", "C"]

// In-order
function in_order(head, nodes) {
  if (head && head.left) {
    in_order(head.left, nodes);
  }

  nodes.push(head.data);

  if (head && head.right) {
    in_order(head.right, nodes);
  }
  return nodes;
}

const in_order_res = in_order(root, []); // ["D", "B", "E", "A", "C"]

// Post-order popup from call stack sequence
function post_order(root, nodes) {
  if (root && root.left) {
    post_order(root.left, nodes);
  }
  if (root && root.right) {
    post_order(root.right, nodes);
  }
  nodes.push(root.data);
  return nodes;
}

const post_order_res = post_order(root, []); // => [ D, E, B, C, A ]

function level_order(root, nodes) {
  var queue = [root];
  while (queue.length > 0) {
    // front of queue is at element 0 and we push elements to back of queue
    var n = queue.shift();
    nodes.push(n.data);
    if (n.left !== null) {
      queue.push(n.left);
    }
    if (n.right !== null) {
      queue.push(n.right);
    }
  }
  return nodes;
}

const level_order_res = level_order(root, []); // => [ A, B, C, D, E ]

// hidden runtime response
window.global = {
  runtimeRes: `
    <span>pre_order_res:</span> ${pre_order_res}
    <span>in_order_res:</span> ${in_order_res}
    <span>post_order_res:</span> ${post_order_res}
    <span>level_order_res:</span> ${level_order_res}
  `
}
