const { mapObject } = require('./mapObject');
const testObject1 = { a: 1, b: 2, c: 3 };
const testObject2 = { 1: 1, 2: 2, 3: 3 };
const sumStrings = function(x, y) {
  return x + y.toString();
};
const sum = function(x, y) {
  return Number(x) + y;
};
describe('mapObject', () => {
  it('should return correct copy', () => {
    expect(mapObject(testObject1, sumStrings)).toEqual(['a1', 'b2', 'c3']);
    expect(mapObject(testObject2, sum)).toEqual([2, 4, 6]);
  });
});
