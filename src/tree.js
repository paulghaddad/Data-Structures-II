/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    this.children = [...this.children, new Tree(value)];
  }

  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (this.value === value) return true;

    if (this.children.length === 0) return false;

    return this.children.some(node => node.contains(value));
  }
}

module.exports = Tree;
