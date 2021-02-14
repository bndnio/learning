/**
 * Implement a ProductList class that has two methods, 
 * add(n) (which pushes the value n to the back of the list) and 
 * product(m) (which returns the product of the last m numbers in the list).
 * 
 * Example
 * ProductList p = new ProductList();
 * p.add(7);         // [7]
 * p.add(0);         // [7,0]
 * p.add(2);         // [7,0,2]
 * p.add(5);         // [7,0,2,5]
 * p.add(4);         // [7,0,2,5,4]
 * p.product(3);     // return 40 because 2 * 5 * 4
 */

function ProductList() {
    const nums = []
  
    this.add = function(num) {
      nums.push(num)
    }
    this.product = function(cnt) {
      const count = +cnt
  
      if (
        !Number.isInteger(count)
        || count === 0
        || count > nums.length
      ) return undefined
  
      const startIdx = nums.length - count
      return nums
        .filter((_, idx) => idx >= startIdx)
        .reduce((prod, val) => prod * val, 1)
    }
  }
  
  
  function testSolution() {
    const p = new ProductList
  
    p.add(7);         // [7]
    p.add(0);         // [7,0]
    p.add(2);         // [7,0,2]
    p.add(5);         // [7,0,2,5]
    p.add(4);         // [7,0,2,5,4]
  
    const testCases = [
      [0, undefined],
      [1, 4],
      ["1", 4],
      [2, 20],
      [3, 40],
      [4, 0],
      [5, 0],
      [6, undefined],
      ["ABC", undefined],
      [undefined, undefined],
    ]
  
    testCases.forEach(([val, expected]) => {
      const product = p.product(val)
  
      let prefix = product === expected ? "✔" : "✘"
      return console.log(`${prefix} expected ${expected}, got ${product}`)
    })
  }
  
  testSolution()
  
  // 👇 An implementation using prototypes instead of functions on `this``
  //    Preferred other implementation because we can hide `nums`
  function ProductListWithPrototype() {
    this.nums = []
  }
  ProductListWithPrototype.prototype.add = function(num) {
    this.nums.push(num)
  }
  ProductListWithPrototype.prototype.product = function(cnt) {
    const count = +cnt
  
    if (
      !Number.isInteger(count)
      || count === 0
      || count > this.nums.length
    ) return undefined
  
    const startIdx = this.nums.length - count
    return this.nums
      .filter((_, idx) => idx >= startIdx)
      .reduce((prod, val) => prod * val, 1)
  }
  