const {
  sortObjectAscending,
  sortObjectDescending,
  convertKeysNum
} = require('./sortObject');
const testObject = { node2: 'a', node5: 'b', node1: 'c' };

describe('convert keys to numbers', () => {
  it('should convert keys of object to numbers', () => {
    expect(convertKeysNum(testObject)).toEqual([2, 5, 1]);
  });
});

describe('sortAscending', () => {
  it('should keys of object in ascending order', () => {
    expect(sortObjectAscending(testObject)).toEqual({
      node1: 'c',
      node2: 'a',
      node5: 'b'
    });
  });
});

describe('sortAscending', () => {
  it('should order keys of object in descending order', () => {
    expect(sortObjectDescending(testObject)).toEqual({
      node5: 'b',
      node2: 'a',
      node1: 'c'
    });
  });
});
