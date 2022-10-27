/* Defining Node class */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* Defining LinkedList class */
class LinkedList {
  /* Declaring class properties */
  head;
  size;
  tail;

  /* The constructor takes an array[] as a parameter to set values */
  constructor(array) {
    this.head = new Node(array[0]);
    this.size = array.length;

    if (array[1]) {
      let current;
      current = this.head;

      for (let i = 1; i < array.length; i++) {
        const node = new Node(array[i]);

        current.next = node;
        current = current.next;
      }

      this.tail = current;
    } else this.tail = this.head;
  }

  /* Method that will add a Node with the passed value at the end of the LinkedList */
  addValueAtTail(value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.size++;

    return this.getList();
  }

  /* Method that will add a Node with the passed value at the start of the LinkedList */
  addValueAtHead(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;

    return this.getList();
  }

  /* Method that will add a Node with the passed value at the middle(to the right if odd) of the LinkedList */
  addValueAtMiddle(value) {
    const newNode = new Node(value);
    let prevMidNode = this.head;
    let nextMidNode = this.head.next;

    for (let i = 0; i < this.size / 2 - 1; i++) {
      prevMidNode = prevMidNode.next;
    }

    nextMidNode = prevMidNode.next;
    prevMidNode.next = newNode;
    newNode.next = nextMidNode;
    this.size++;

    return this.getList();
  }

  /* Method that will delete the first Node of the LinkedList */
  deleteHead() {
    this.head = this.head.next;
    this.size--;

    return this.getList();
  }

  /* Method that will delete the last Node of the LinkedList */
  deleteTail() {
    if (this.size === 1) {
      this.head = null;
    } else if (this.size === 2) {
      this.head.next = null;
    } else {
      let newTail = this.head;

      for (let i = 0; i < this.size - 2; i++) {
        newTail = newTail.next;
      }

      newTail.next = null;
      this.tail = newTail;
    }

    this.size--;

    return this.getList();
  }

  /* Method that will delete the middle(to the right if pair) Node of the LinkedList */
  deleteMiddle() {
    let prevMidNode = this.head;

    if (this.size % 2 === 0) {
      for (let i = 0; i < this.size / 2 - 1; i++) {
        prevMidNode = prevMidNode.next;
      }
    } else {
      for (let i = 0; i < this.size / 2 - 2; i++) {
        prevMidNode = prevMidNode.next;
      }
    }

    prevMidNode.next = prevMidNode.next.next;
    this.size--;

    return this.getList();
  }

  /* Method that will sort the LinkedList from higher to lower Node values */
  higherToLower() {
    let list = this.getList();
    let currNode;

    list = list.sort((a, b) => b - a);

    for (let i = 0; i < list.length; i++) {
      if (i === 0) {
        currNode = new Node(list[i]);
        this.head = currNode;
      } else {
        currNode.next = new Node(list[i]);
        currNode = currNode.next;
      }

      this.tail = currNode;
    }

    return this.getList();
  }

  /* Method that will reverse the order of the LinkedList */
  reverse() {
    const list = this.getList();
    let currNode;

    for (let i = list.length - 1; i > -1; i--) {
      if (i === list.length - 1) {
        currNode = new Node(list[i]);
        this.head = currNode;
      } else {
        currNode.next = new Node(list[i]);
        currNode = currNode.next;
      }

      this.tail = currNode;
    }

    return this.getList();
  }

  /* Method that will return the LinkedList as an array[] */
  getList() {
    let currNode = this.head;
    const list = [];

    if (currNode) {
      list.push(currNode.value);

      while (currNode.next) {
        currNode = currNode.next;
        list.push(currNode.value);
      }
    }

    return list;
  }
}

/* Export */
module.exports = LinkedList;
