const ceaserCipher = require('./ceaserCipher');

test('check encryption using ceaser cipher', ()=> {
    expect(ceaserCipher('hello',3)).toBe('khoor');
})