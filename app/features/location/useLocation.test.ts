import { useLocation } from './useLocation';
import { renderHook } from '@testing-library/react';
import { describe, expect, it, jest, beforeEach } from '@jest/globals';

describe('useLocation', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('returns [null, false] when geolocation is not supported', () => {
        // @ts-expect-error Delete geolocation to test the unsupported case
        delete global.navigator.geolocation;
        const [location, supported] = renderHook(() => useLocation({})).result.current;
        expect(location).toBeNull();
        expect(supported).toBe(false);
    });
});