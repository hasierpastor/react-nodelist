//function that takes in node object generated by generateNodes function
//returns array where keys have been converted to number
//Runtime is 0(n^2) because I am  running the substring function inside the map function
//Space complexity is 0(n*s) where n is the length of the new num array and s is the length of the new string created
export function convertKeysNum(obj) {
  let arrayKeys = Object.keys(obj);
  let nums = arrayKeys.map(function(key) {
    return +key.substring(4);
  });
  return nums;
}

//function that takes in node object generated by generateNodes function
//returns a new object sorted in ascending order
//Time complexity would be O(n^2) because that is the time complexity of convertKeysNum function
//This is the case even though sort is O(nlogn) and reduce is O(n)
export function sortObjectAscending(obj) {
  let numKeys = convertKeysNum(obj);
  return numKeys
    .sort(function(a, b) {
      return a - b;
    })
    .reduce(function(sortedObject, key) {
      key = `node${key}`;
      sortedObject[key] = obj[key];
      return sortedObject;
    }, {});
}

//function that takes in node object generated by generateNodes function
//returns a new object sorted in descending order
//Time complexity would be O(n^2) because that is the time complexity of convertKeysNum function
//This is the case even though sort is O(nlogn) and reduce is O(n)
export function sortObjectDescending(obj) {
  let numKeys = convertKeysNum(obj);
  return numKeys
    .sort(function(a, b) {
      return b - a;
    })
    .reduce(function(sortedObject, key) {
      key = `node${key}`;
      sortedObject[key] = obj[key];
      return sortedObject;
    }, {});
}
