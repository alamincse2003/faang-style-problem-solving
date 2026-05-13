function removeDuplicatesString(str) {
  return [...new Set(str)].join("");
}
console.log(removeDuplicatesString("hello"));
