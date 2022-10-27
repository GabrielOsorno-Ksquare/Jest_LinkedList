/* Import */
const LinkedList = require('./linkedlist.js');

/* Tests */
describe('Testing LinkedList class', () => {
  it('tests addValueAtTail method', () => {
    expect(new LinkedList([4, 2, 1, 3]).addValueAtTail(10)).toEqual(
      new LinkedList([4, 2, 1, 3, 10]).getList()
    );
  });
  it('tests addValueAtHead method', () => {
    expect(new LinkedList([4, 2, 1, 3]).addValueAtHead(1)).toEqual(
      new LinkedList([1, 4, 2, 1, 3]).getList()
    );
  });
  it('tests addValueAtMiddle method', () => {
    expect(new LinkedList([4, 2, 1, 3]).addValueAtMiddle(5)).toEqual(
      new LinkedList([4, 2, 5, 1, 3]).getList()
    );
  });
  it('tests deleteHead method', () => {
    expect(new LinkedList([4, 2, 1, 3]).deleteHead()).toEqual(
      new LinkedList([2, 1, 3]).getList()
    );
  });
  it('tests deleteTail method', () => {
    expect(new LinkedList([4, 2, 1, 3]).deleteTail()).toEqual(
      new LinkedList([4, 2, 1]).getList()
    );
  });
  it('tests deleteMiddle method', () => {
    expect(new LinkedList([4, 2, 1, 3]).deleteMiddle()).toEqual(
      new LinkedList([4, 2, 3]).getList()
    );
  });
  it('tests higherToLower method', () => {
    expect(new LinkedList([4, 2, 1, 3]).higherToLower()).toEqual(
      new LinkedList([4, 3, 2, 1]).getList()
    );
  });
  it('tests reverse method', () => {
    expect(new LinkedList([4, 2, 1, 3]).reverse()).toEqual(
      new LinkedList([3, 1, 2, 4]).getList()
    );
  });
});
