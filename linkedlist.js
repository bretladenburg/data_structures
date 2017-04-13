'use strict';

function Node(value, next) {
  this.value = value;
  this.next = next ? next : null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.push = function(value) {
  this.head = new Node(value, this.head);
  this.length++;
};
LinkedList.prototype.display = function() {
  var curr = this.head;
  var output = '';
  while(curr) {
    output += curr.value + '->';
    curr = curr.next;
  }
  return output;

  var list = new LinkedList();
  //visualize whatever data is in your linked list as a string.
  //ex: [5] -> [6] -> [3] -> [18]

  /*
  var list = new LinkedList();
  list.push(18);
  list.push(3);
  list.push(6);
  list.push(5);
  list.display() returns '[5]'-> '[6]'-> '[3]'
  */
};
