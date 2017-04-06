const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = isRealString('');
    var str2 = isRealString(98);

    expect(str).toBe(false);
    expect(str2).toBe(false);

  });

  it('should reject string with only spaces', () => {
    var str = isRealString('   ');

    expect(str).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var str = isRealString('Harry');
    var str2 = isRealString('  Tobias  ');

    expect(str).toBe(true);
    expect(str2).toBe(true);

  });
});
