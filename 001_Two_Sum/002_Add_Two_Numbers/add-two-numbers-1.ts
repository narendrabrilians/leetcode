import ListNode from "./list-node";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let tempNumber = 0;
  const head = new ListNode();

  let node = head;

  while (l1 || l2 || tempNumber !== 0) {
    if (!l1) {
      l1 = new ListNode();
    }
    if (!l2) {
      l2 = new ListNode();
    }
    let resultValue = l1.val + l2.val + tempNumber;
    tempNumber = 0;

    if (resultValue > 9) {
      resultValue = resultValue % 10;
      tempNumber = 1;
    }

    node.val = resultValue;
    console.log(node.val);

    l1 = l1.next;
    l2 = l2.next;

    if (l1 || l2 || tempNumber !== 0) {
      node.next = new ListNode();
      node = node.next;
    }
  }

  return head;
}
