//function that accepts an object and callback
//iterates through object keys and runs callback on key and object[key]
//need index to add to key prop in react
export function mapObject(object, callback) {
  return Object.keys(object).map((key, index) => {
    return callback(key, object[key], index);
  });
}
