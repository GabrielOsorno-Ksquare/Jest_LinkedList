/* Import */
const LinkedList = require('./linkedlist.js');

/* Tests */
describe('Testing LinkedList class', () => {
  let ll1;
  let ll2;
  let ll3;
  let ll4;

  beforeEach(() => {
    ll1 = new LinkedList([4, 2, 1, 3]);
    ll2 = new LinkedList();
    ll3 = new LinkedList([2, 7, 4, 9, 1]);
    ll4 = new LinkedList([6, 'Y']);
  });

  it('addValueAtTail method', () => {
    expect(ll1.addValueAtTail(10)).toEqual([4, 2, 1, 3, 10]);
    expect(ll2.addValueAtTail(10)).toEqual([10]);
    expect(ll3.addValueAtTail(['15'])).toEqual([2, 7, 4, 9, 1, ['15']]);
    expect(ll4.addValueAtTail('Z')).toEqual([6, 'Y', 'Z']);
  });

  it('addValueAtHead method', () => {
    expect(ll1.addValueAtHead(0)).toEqual([0, 4, 2, 1, 3]);
    expect(ll2.addValueAtHead(0)).toEqual([0]);
    expect(ll3.addValueAtHead(['A'])).toEqual([['A'], 2, 7, 4, 9, 1]);
    expect(ll4.addValueAtHead('A')).toEqual(['A', 6, 'Y']);
  });

  it('addValueAtMiddle method', () => {
    expect(ll1.addValueAtMiddle(5)).toEqual([4, 2, 5, 1, 3]);
    expect(ll2.addValueAtMiddle(5)).toEqual([5]);
    expect(ll3.addValueAtMiddle(['M'])).toEqual([2, 7, 4, ['M'], 9, 1]);
    expect(ll4.addValueAtMiddle('M')).toEqual([6, 'M', 'Y']);
  });

  it('deleteHead method', () => {
    expect(ll1.deleteHead()).toEqual([2, 1, 3]);
    expect(ll2.deleteHead()).toEqual([]);
    expect(ll3.deleteHead()).toEqual([7, 4, 9, 1]);
    expect(ll4.deleteHead()).toEqual(['Y']);
  });

  it('deleteTail method', () => {
    expect(ll1.deleteTail()).toEqual([4, 2, 1]);
    expect(ll2.deleteTail()).toEqual([]);
    expect(ll3.deleteTail()).toEqual([2, 7, 4, 9]);
    expect(ll4.deleteTail()).toEqual([6]);
  });

  it('deleteMiddle method', () => {
    expect(ll1.deleteMiddle()).toEqual([4, 2, 3]);
    expect(ll2.deleteMiddle()).toEqual([]);
    expect(ll3.deleteMiddle()).toEqual([2, 7, 9, 1]);
    expect(ll4.deleteMiddle()).toEqual([6]);
  });

  it('higherToLower method', () => {
    expect(ll1.higherToLower()).toEqual([4, 3, 2, 1]);
    expect(ll2.higherToLower()).toEqual([]);
    expect(ll3.higherToLower()).toEqual([9, 7, 4, 2, 1]);
    expect(ll4.higherToLower()).toEqual([6, 'Y']);
  });

  it('reverse method', () => {
    expect(ll1.reverse()).toEqual([3, 1, 2, 4]);
    expect(ll2.reverse()).toEqual([]);
    expect(ll3.reverse()).toEqual([1, 9, 4, 7, 2]);
    expect(ll4.reverse()).toEqual(['Y', 6]);
  });
});
