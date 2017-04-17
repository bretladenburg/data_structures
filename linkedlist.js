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

LinkedList.prototype.pop = function() {
  if (!this.head) {
    return null;
  }
  let popped = this.head;
  this.length--;
  this.head = this.next;
  return popped;
}
LinkedList.prototype.search = function(val) {
  //if the value is in our list, then return the node that contains that value.
  //if the value is not in the list, return null
}
LinkedList.prototype.getItem = function(indx) {
  //given an index that is less than the length of the list, return the value of the node at that index.
}
LinkedList.prototype.remove = function(val) {
  //remove the first node found with value === val
}
