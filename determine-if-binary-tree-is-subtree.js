/**
 * Determine if binary tree is a subtree of a larger binary tree
 *
 * Therefore, following combination can uniquely identify a tree.
 * - Inorder and Preorder.
 * - Inorder and Postorder.
 * - Inorder and Level-order.
 */

const root = {
  data: 10,
  left: {
    data: 4,
    left: null,
    right: {
      data: 30,
      left: null,
      right: null
    }
  },
  right: {
    data: 6,
    left: null,
    right: null
  }
};

const root_r = {
  data: 26,
  left: root,
  right: {
    data: 3,
    left: null,
    right: {
      data: 3,
      left: null,
      right: null
    }
  }
};

function pre_order(root, nodes) {
  nodes.push(root.data);
  if (root && root.left) {
    pre_order(root.left, nodes);
  }
  if (root && root.right) {
    pre_order(root.right, nodes);
  }
  return nodes;
}

function in_order(root, nodes) {
  if (root && root.left) {
    in_order(root.left, nodes);
  }
  nodes.push(root.data);
  if (root && root.right) {
    in_order(root.right, nodes);
  }
  return nodes;
}

// function that takes two root nodes and determines if
// the first tree is a subtree of the second tree
function is_subtree(root, root_r) {
  // the variables below will hold the values:
  // 4-30-10-6
  // 4-30-10-6-26-3-3
  var inord1 = in_order(root, []).join("-");
  var inord2 = in_order(root_r, []).join("-");

  // 10-4-30-6
  // 26-10-4-30-6-3-3
  var preord1 = pre_order(root, []).join("-");
  var preord2 = pre_order(root_r, []).join("-");

  // check if the left tree is contained with the right tree
  return inord2.indexOf(inord1) !== -1 && preord2.indexOf(preord1) !== -1;
}

is_subtree(root, root_r); // => true

// hidden runtime response
window.global = {
  runtimeRes: `<span>is_subtree:</span> ${is_subtree(root, root_r)}`
};
