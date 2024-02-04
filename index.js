class node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
class linkedList {
  constructor() {
    this.listHead = null;
  }
  append(value) {
    if (this.listHead == null) this.prepend(value);
    else {
      let temp = this.listHead;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new node();
      temp.nextNode.value = value;
    }
  }
  prepend(value) {
    if (this.listHead == null) {
      this.listHead = new node();
      this.listHead.value = value;
    } else {
      let temp = this.listHead;
      this.listHead = new node();
      this.listHead.value = value;
      this.listHead.nextNode = temp;
    }
  }
  head() {
    if (this.listHead == null) {
      return "no nodes";
    } else return this.listHead;
  }
  tail() {
    if (this.listHead == null) {
      return "no nodes";
    } else {
      let temp = this.listHead;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      return temp;
    }
  }
  size() {
    if (this.listHead == null) {
      return 0;
    } else {
      let temp = this.listHead;
      let nodeNumber = 1;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
        nodeNumber++;
      }
      return nodeNumber;
    }
  }
  at(index) {
    if (index == 0) return this.listHead;
    else {
      let temp = this.listHead;
      let nodeNumber = 1;
      while (temp.nextNode != null) {
        if (index == nodeNumber) {
          return temp.nextNode;
        }
        temp = temp.nextNode;
        nodeNumber++;
      }
      return "not enough nodes";
    }
  }
  pop() {
    if (this.listHead == null) "no nodes to pop";
    else {
      let temp = this.listHead;
      while (temp.nextNode != null) {
        if (temp.nextNode.nextNode == null) {
          temp.nextNode = null;
          return;
        }
        temp = temp.nextNode;
      }
    }
  }
  contains(value) {
    if (this.listHead == null) {
      return "no nodes";
    } else {
      let temp = this.listHead;
      while (temp != null) {
        if (temp.value == value) {
          return true;
        }
        temp = temp.nextNode;
      }
      return false;
    }
  }
  find(value) {
    if (this.listHead.value == value) return 0;
    else {
      let temp = this.listHead;
      let nodeNumber = 0;
      while (temp != null) {
        if (temp.value == value) {
          return nodeNumber;
        }
        temp = temp.nextNode;
        nodeNumber++;
      }
      return null;
    }
  }
  toString() {
    let temp = this.listHead;
    let string = "";
    if (temp == null) {
      return null;
    }
    while (temp != null) {
      string = string.concat(` ${temp.value} => `);
      temp = temp.nextNode;
    }
    string = string.concat("null");
    return string;
  }
  insertAt(value, index) {
    let temp = this.listHead;
    let nodeNumber = 0;
    while (temp != null) {
      if (index == nodeNumber) {
        const holder = { ...temp };
        temp.value = value;
        temp.nextNode = holder;
        return;
      }
      temp = temp.nextNode;
      nodeNumber++;
    }
  }
  removeAt(index) {
    let temp = this.listHead;
    let nodeNumber = 0;
    while (temp != null) {
      if (index == nodeNumber + 1) {
        const holder = { ...temp.nextNode.nextNode };
        temp.nextNode = holder;
        return;
      }
      temp = temp.nextNode;
      nodeNumber++;
    }
  }
}

const list = new linkedList();
list.append("poop");
list.append("poop2");
list.append("poop3");
list.prepend("poop0");
list.insertAt("new poop", 1);
list.removeAt(3);
console.log(list.toString());
console.log(list);
