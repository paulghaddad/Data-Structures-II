// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    const newBranch = new BinarySearchTree(value);

    if (value > this.value && this.right === null) {
      this.right = newBranch;
    } else if (value <= this.value && this.left === null) {
      this.left = newBranch;
    } else if (value > this.value) {
      const parentBranch = this.right;
      parentBranch.insert(value);
    } else if (value <= this.value) {
      const parentBranch = this.left;
      parentBranch.insert(value);
    }
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) {
      return true;
    } else if (target < this.value) {
      const parentNode = this.left;
      if (parentNode === null) return false;
      return parentNode.contains(target);
    } else if (target > this.value) {
      const parentNode = this.right;
      if (parentNode === null) return false;
      return parentNode.contains(target);
    }
  }

  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);

    if (this.left) {
      this.left.depthFirstForEach(cb);
    }

    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }

  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = [];

    queue.push(this);

    while (queue.length > 0) {
      const dequeuedLeaf = queue.shift();

      cb(dequeuedLeaf.value);

      let leftLeaf = dequeuedLeaf.left;
      let rightLeaf = dequeuedLeaf.right;

      while (leftLeaf !== null) {
        queue.push(leftLeaf);
        leftLeaf = leftLeaf.left;
      }

      if (rightLeaf !== null) {
        queue.push(rightLeaf);
        rightLeaf = rightLeaf.right;
      }
    }
  }
}

module.exports = BinarySearchTree;
