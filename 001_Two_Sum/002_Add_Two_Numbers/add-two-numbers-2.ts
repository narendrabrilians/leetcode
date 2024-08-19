import ListNode from "./list-node";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let currentResultNode = new ListNode();
  let outputNode = currentResultNode;
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (carry > 0) {
      sum += carry;
    }
    carry = 0;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }
    currentResultNode.next = new ListNode(sum);
    currentResultNode = currentResultNode.next;
    sum = 0;
  }
  return outputNode.next;
}
