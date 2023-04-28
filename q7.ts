//Write a function that takes two arrays of integers as input and returns a new array containing the common elements of both arrays, sorted in ascending order.

function mergesort(arr): number[] {
  if (arr.length < 2) {
    return arr;

  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex, arr.length);
  return merge(mergesort(leftArr), mergesort(rightArr));

}
function merge(leftArr, rightArr): number[] {
  let resultarr: number[] = [];
  let leftindex = 0;
  let rightindex = 0;
  while (leftindex < leftArr.length && rightindex < rightArr.length) {
    if (leftArr[leftindex] < rightArr[rightindex]) {
      resultarr.push(leftArr[leftindex]);
      leftindex = leftindex + 1;
    }
    else {
      resultarr.push(rightArr[rightindex]);
      rightindex = rightindex + 1;
    }
  }
  return resultarr.concat(leftArr.slice(leftindex)).concat(rightArr.slice(rightindex));

}






export function commonOfBothArray(arr1: number[], arr2: number[]) {
  let s = new Set();
  for (const element of arr1) {
    if (arr2.includes(element)) {
      s.add(element);
    }
  }
  let finalArray = Array.from(s);

  return mergesort(finalArray);
}


console.log(commonOfBothArray([4, 3, 2, 5, 6, 1, 8, 9], [5, 4, 2, 6, 1]));
console.log(commonOfBothArray([10,23,34,54,21,11,2,1,34,65],[23,54,11,2,34,11,1,22]));








