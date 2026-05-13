function rotateStringRight(str, k) {
  let n = str.length;

  k = k % n;

  let rotatedPart = str.slice(n - k);
  let remainingPart = str.slice(0, n - k);

  return rotatedPart + remainingPart;
}

console.log(rotateStringRight("hello", 2));
