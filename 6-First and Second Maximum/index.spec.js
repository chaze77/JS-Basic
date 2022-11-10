import { func } from './index';

describe('First and Second Maximum', () => {
  test('Empty list', () => {
    expect(func([])).toEqual([]);
  });
  test('One item list', () => {
    expect(func([2])).toEqual([2]);
  });
  test('Two item list', () => {
    expect(func([5, 3])).toEqual([5, 3]);
  });
  test('Ascending list', () => {
    expect(func([1,3,5,7,9])).toEqual([9, 7]);
  });
  test('Descending list', () => {
    expect(func([8,4,3,1,-3])).toEqual([8, 4]);
  });
  test('Mixed list', () => {
    expect(func([8,4,-4,2,10])).toEqual([10, 8]);
  });
});