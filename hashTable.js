let generateUniqueIndex = (item = "", maxlimit) => {
  let hash = 0;
  for (let index of item) {
    hash += item.charCodeAt(index);
  }
  return hash % maxlimit;
};
class HashTable {
  storage = [];
  limit = 4;
  print() {
    console.log(this.storage);
  }
  setup(value) {
    //generate unique index
    for (let j = 0; j < value.length; j++) {
      let key = value[j];
      let individualVal = value[j];
      let index = generateUniqueIndex(key, this.limit);
      if (this.storage[index] === undefined) {
        this.storage[index] = [[key, individualVal]];
      } else {
        let inserted = false;
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            this.storage[index][i][1] = individualVal;
            inserted = true;
          }
          if (inserted === false) {
            this.storage[index].push([key, individualVal]);
          }
        }
      }
    }
  }
  indict(key) {
    let result;
    let index = generateUniqueIndex(key, this.limit);
    console.log(index);
    if (this.storage[index] === undefined) {
      console.log(false);
      return;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          result = this.storage[index][i][1];
        }
      }
      console.log(result ? true : false);
    }
  }
}

console.log(generateUniqueIndex("steve", 10));
let ht = new HashTable();
ht.setup(["cat", "car", "bar"]);
ht.indict("car");
ht.print();
