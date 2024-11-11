import { add } from './index';
import { describe, expect, test } from 'vitest'

describe('add function', () => {

	test('should add positive numbers', () => {
		expect(add(1, 2)).toBe(3);
	});

	test('should add negative numbers', () => {
		expect(add(-1, -1)).toBe(-2);
	});

	test('should add zeros', () => {
		expect(add(0, 0)).toBe(0);
	});

});
