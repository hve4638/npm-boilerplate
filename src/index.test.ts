import { describe, test, expect } from 'vitest';
import { example } from '@/index';

describe('example', () => {
    test('is a function', () => {
        expect(typeof example).toBe('function');
    });
});
