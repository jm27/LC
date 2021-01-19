/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // Create varible sum
  let sum = 0;

  // Create recursive function
  const traverse = function (node) {
    if (!node) {
      return;
    }

    let value = node.val;
    // Check value
    if (value <= high && value >= low) {
      sum += value;
    }
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return sum;
};

/**
 * Runtime: 236 ms, faster than 47.26% of JavaScript online submissions for Range Sum of BST.
 * Memory Usage: 68.6 MB, less than 18.75% of JavaScript online submissions for Range Sum of BST.
 */
