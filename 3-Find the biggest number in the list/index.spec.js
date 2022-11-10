import { func } from './index';

describe('Biggest Number', () => {
  test('Empty list', () => {
    expect(func([])).toEqual(0);
  });
  test('One item list', () => {
    expect(func([1])).toEqual(1);
  });
  test('many items list', () => {
    expect(func([5,2,4,3,6,1])).toEqual(6);
  });
  test('ascending list', () => {
    expect(func([2,4,6,8,10])).toEqual(10);
  });
  test('descending list', () => {
    expect(func([9,7,5,3,1])).toEqual(9);
  });
  test('mixed list', () => {
    expect(func([8,7,5,4,6,9])).toEqual(9);
  });
});

