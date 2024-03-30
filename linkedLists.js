class Node {
  constructor(value, nextNode = null){
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  // 01- adds a new node containing value to the end of the list
  append(value) {
    let node = new Node(value);
    let current;

    if(!this.head){
      this.head = node;
    }else {
      current = this.head;

      while(current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }

    this.size ++;
  }

  // 02- adds a new node containing value to the start of the list.
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size ++;
  }

  // 03- returns the total number of nodes in the list
  nodeSize(){
    return console.log(this.size)
  }

  // 04 returns the first node in the list
  nodeHead(){
    return console.log(this.head)
  }

  // 05- returns the last node in the list
  nodeTail(){
    return console.log(this.tail)
  }

  // 06- returns the node at the given index
  at(index){
    let current = this.head;
    let count = 0;

    while(current){
      if(count ==index) {
        console.log(current.value)
      }
      count++;
      current = current.nextNode;
    }

    return null;
  }

  // 07- removes the last element from the list
  pop(){
    if(this.size <= 0){
      return;
    }
    this.removeAt(this.size -1)

  }

  // 08- returns true if the passed in value is in the list and otherwise returns false.
  contains(value){
    let count = 0;
    let current
    current = this.head;
    while(count < this.size ){
      if(current.value === value){
        return console.log(true)
      }
      count++;
      current = current.nextNode;
    }
    return console.log(false)
  }

  // 09- returns the index of the node containing value, or null if not found.
  find(value){
    let count = 0;
    let current
    current = this.head;
    while(count < this.size){
      if(current.value === value){
        return console.log(count)
      }
      count++;
      current = current.nextNode;
    }
    return console.log(null)
  }

  // 10- represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
  toString(){
    let current = this.head;
    let resp = ``;
    while(current) {
      resp = resp + `(${current.value})->`
      current = current.nextNode;
    }
    resp = resp + "null";
    return console.log(resp)
  
  }

  // 11- inserts a new node with the provided value at the given index.
  insertAt(value, index){
    // if index is out of range
    if(index > 0 && index > this.size) {
      return;
    }

    // if first index
    if(index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.nextNode;
    }

    node.nextNode = current;
    previous.nextNode = node;

    this.size++;

  }

  // 12-removes the node at the given index.
  removeAt(index){
    if(index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if(index === 0) {
      this.head = current.nextNode;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.nextNode;
      }

      previous.nextNode = current.nextNode;
    }

    this.size --;
  }

}

const list = new LinkedList();

list.append(100)
list.append(200)
list.append(300)
list.prepend(50)
list.find(300)


list.toString();