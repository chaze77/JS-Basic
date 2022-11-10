import { func } from './index';

describe('Average', () => {
  test('Empty list', () => {
    expect(func([])).toEqual(0);
  });
  test('One item list', () => {
    expect(func([2])).toEqual(2);
  });
  test('Positive list', () => {
    expect(func([1,2,3,4,5])).toEqual(3);
  });
  test('Decimal list', () => {
    expect(func([1.5,2.5,3.5,4.8,5.2])).toEqual(3.5);
  });
});