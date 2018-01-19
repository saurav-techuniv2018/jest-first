const sum = require('./sum');

test("Sum of 2 and 3 should be 5", function () {
    expect(sum(2, 3)).toBe(5);
});