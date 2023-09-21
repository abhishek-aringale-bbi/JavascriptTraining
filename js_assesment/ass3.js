class arrayManipulation {
  constructor(array) {
    this.arr = array;
    this.display();
  }

  sum(arr) {
    console.log(this.arr);
    const sum1 = this.arr.reduce(function (acc, ele) {
      return acc + ele;
    }, 0);
    return sum1;
  }

  average(arr) {
    const avg = (this.sum(arr) / arr.length).toFixed(2);
    return avg;
  }
  largest(arr) {
    return Math.max(...arr);
  }
  smallest(arr) {
    return Math.min(...arr);
  }
  unique(arr) {
    const arr1 = [...new Set(arr)];
    return arr1;
  }
  sort(arr) {
    return arr.sort();
  }

  display() {
    let sum = this.sum(this.arr);
    let average = this.average(this.arr);
    let largest = this.largest(this.arr);
    let smallest = this.smallest(this.arr);
    let unique = this.unique(this.arr);
    let sort = this.sort(this.arr);

    let obj = {};
    obj.sum = sum;
    obj.average = average;
    obj.largest = largest;
    obj.smallest = smallest;
    obj.uniqueNOS = unique;
    obj.sortedArray = sort;
    console.log(obj);
  }
}

const arr1 = new arrayManipulation([4, 2, 7, 4, 1, 9, 7]);
