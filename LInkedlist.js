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
  addItems() {
    const value = addTwoNums([243, 564]);
    for (let i = 0; i < value.reverse().length; i++) {
      let node = new Node(value[i], this.root);
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
list.addItems();
list.reverse();
list.print();
