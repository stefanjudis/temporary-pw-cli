'use strict';

const { getTempURL } = require('.');

describe('getTempURL', () => {
  test('creates a temporary URL', async () => {
    const url = await getTempURL('foooo');
    expect(url).toBe('https://temporary.pw/?key=schnitzel');
  });
});
