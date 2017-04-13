'use strict';

function Node(value, next) {
  this.value = value;
  this.next = next ? next : null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function(value) {
  var unicorn = new Node(value, this.head);
  this.head = unicorn;
};
