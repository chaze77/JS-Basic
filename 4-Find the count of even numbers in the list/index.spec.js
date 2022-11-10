import { func } from './index';

describe('Count of even numbers', () => {
  test('Empty list', () => {
    expect(func([])).toEqual(0);
  });
  test('One item list', () => {
    expect(func([1])).toEqual(0);
  });
  test('One item list', () => {
    expect(func([2])).toEqual(1);
  });
  test('Multiple item list', () => {
    expect(func([2,3,8,3,21,40])).toEqual(3);
  });
  test('Multiple item list with 0', () => {
    expect(func([0,3,7,3,2,4])).toEqual(3);
  });
  test('Decimal number list', () => {
    expect(func([0.2,3.3,7.2,3,2,4])).toEqual(2);
  });
  test('Negative number list', () => {
    expect(func([-2,3,-4,3,2,4])).toEqual(4);
  });
});