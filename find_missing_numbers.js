function findMissingNumbers(arr) {
  let set = new Set(arr);
  let result = [];

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(findMissingNumbers([1, 3, 5, 6, 8]));
