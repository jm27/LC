/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  // Create empty array variable
  const arr = [];
  // Loop trough object and push values into array
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  // Join array intro string use parseInt to multiply number by base 2
  return parseInt(arr.join(""), 2);
};

/**
 * Runtime: 80 ms, faster than 55.15% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 * Memory Usage: 38.6 MB, less than 66.86% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 */
