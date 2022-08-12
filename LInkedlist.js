const addTwoNums = (a = []) => {
  let reversed = 0;
  for (let i = 0; i < a.length; i++) {
    reversed += Number(String(a[i]).split("").reverse().join(""));
  }
  return String(reversed).split("").reverse();
};
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
    this.prev = null;
  }
}
class List {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  addItems(data) {
    // const value = addTwoNums([243, 564]);
    for (let i = 0; i < data.length; i++) {
      let node = new Node(data[i], this.root);
      this.root = node;
    }
  }
  reverse() {
    let current = this.root;
    let next, prev;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    // console.log(prev);
  }
  getAtIndex(index) {
    let count = 1;

    let current;
    while (this.root !== null) {
      if (count + 1 === index) {
        // console.log(current)
      }
      current = this.root.next;
      this.root = current;
      count++;
    }
  }
  print() {
    let string = "";
    while (this.root !== null) {
      let current = this.root.next;
      string += `${this.root.data} -> `;
      this.root = current;
    }
    console.log(`${string}null`);
  }
}

const list = new List();
list.addItems([1, 2, 3, 4, 5]);
list.reverse();
list.print();
