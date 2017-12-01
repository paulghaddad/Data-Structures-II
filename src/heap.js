/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
      if (this.getStorage()[0] === null) {
        this.storage = [val];
      } else {
        let index = this.getSize();
        this.storage = [...this.getStorage(), val];

        while(index !== -1) {
          index = this.bubbleUp(index);
        }
      }

    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
      let deletedElement, newHeap;
      [deletedElement, ...newHeap] = this.getStorage();

      this.storage = newHeap;
      this.siftDown(0);

      return deletedElement;
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
      return this.getStorage()[0];
    }
    // Returns the size of the heap
    getSize() {
      return this.getStorage().length;
    }
    // Returns the storage array
    getStorage() {
      return this.storage;
    }
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {
      const parentIndex = (index % 2 === 0) ? 0.5 * (index - 2) : 0.5 * (index - 1);

      if (this.storage[parentIndex] < this.storage[index]) {
        const temp = this.storage[parentIndex];
        this.storage[parentIndex] = this.storage[index];
        this.storage[index] = temp;
        return parentIndex;
      } else {
        return -1;
      }
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      const childIndex1 = 2 * index + 1;
      const childIndex2 = 2 * index + 2;
      const largestChildIndex = (this.getStorage()[childIndex1] > this.getStorage()[childIndex2]) ? childIndex1 : childIndex2;

      this.bubbleUp(largestChildIndex);
    }
}

module.exports = Heap;
