// Bài tập 1: Hàm addTwo
function addTwo(num) {
    return num + 2;
  }
  console.log(addTwo(3)); 
  console.log(addTwo(10)); 
  
  // Bài tập 2: Hàm addS
  function addS(word) {
    return word + "s";
  }
  console.log(addS("pizza")); 
  console.log(addS("bagel")); 
  
  // Bài tập 3: Hàm map
  function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
    }
    return result;
  }
  console.log(map([1, 2, 3], addTwo));
  
  // Bài tập 4: Hàm forEach
  function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
  let alphabet = "";
  const letters = ["a", "b", "c", "d"];
  forEach(letters, function (char) {
    alphabet += char;
  });
  console.log(alphabet); 
  
  // Bài tập 5: Hàm mapWith (sử dụng forEach)
  function mapWith(array, callback) {
    const result = [];
    forEach(array, function (item) {
      result.push(callback(item));
    });
    return result;
  }
  console.log(mapWith([1, 2, 3], addTwo)); 
  
  // Bài tập 6: Hàm reduce
  function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    forEach(array, function (item) {
      accumulator = callback(accumulator, item);
    });
    return accumulator;
  }
  
  const nums = [4, 1, 3];
  const add = function (a, b) {
    return a + b;
  };
  console.log(reduce(nums, add, 0)); 
  
  // Bài tập 7: Hàm intersection (sử dụng reduce)
  function intersection(...arrays) {
    return arrays.reduce((acc, array) => {
      return acc.filter(item => array.includes(item));
    });
  }
  
  console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
  