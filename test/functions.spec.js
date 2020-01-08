const assert = require('assert');
const {sum, mult} = require('../functions.js');

describe('function sum', () => {
    it('should summ of 2 and 4 equals 6 ', () => {
        assert.equal(sum(2,4), 6);
    })
    it('should summ of 4 and 4 equals 8 ', () => {
        assert.equal(sum(4,4), 8);
    })
})

it('shoud mult of 5 and 5 not equal 25 ', () => {
    assert.equal(mult(5, 5), 25);
})