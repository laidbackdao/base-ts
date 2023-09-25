import { describe, expect, test } from 'vitest';

import hello from '../src/index';

describe('hello', () => {
	test('should return hello world', () => {
		expect(hello('world')).toBe('Hello world!');
	});
});
