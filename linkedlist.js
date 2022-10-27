class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head;
  size;
  tail;

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

  addValueAtTail(value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.size++;

    return this.getList();
  }

  addValueAtHead(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;

    return this.getList();
  }

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

  deleteHead() {
    this.head = this.head.next;
    this.size--;

    return this.getList();
  }

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
    }

    this.size--;

    return this.getList();
  }

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

module.exports = LinkedList;
