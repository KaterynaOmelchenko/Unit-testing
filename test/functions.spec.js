const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, numberIsPositive,numberIsNegative} = require('../functions.js');

describe('function sum', () => {
    it('should summ of 2 and 4 equals 6 ', () => {
        assert.equal(sum(2,4), 6);
        expect(sum(2,4)).eq(6);
    });
    it('should summ of 4 and 4 equals 8 ', () => {
        assert.equal(sum(4,4), 8);
    });
});

it('shoud mult of 5 and 5 not equal 25 ', () => {
    assert.equal(mult(5, 5), 25);
});

describe( 'function numberIsPositive', () => {
    it( 'should numberIsPositive for positive value return true', () => {
        // assert.equal( numberIsPositive(5), true );
        expect(numberIsPositive(5)).true;
    });

    it( 'should numberIsPositive for negative value return false', () => {
        //assert.equal( numberIsPositive(-5), false );
        expect(numberIsPositive(-5)).false;
    });

    it( 'should numberIsPositive for 0 return false', () => {
        assert.equal( numberIsPositive(0), false );
    });

    it( 'should numberIsPositive for obj return undefined', () => {
        //assert.equal( numberIsPositive({}), undefined );
        expect(numberIsPositive({})).undefined;
    });

    it( 'should numberIsPositive for array return undefined', () => {
        assert.equal( numberIsPositive([]), undefined );
    });

    it( 'should numberIsPositive for string return undefined', () => {
        assert.equal( numberIsPositive(''), undefined );
    });

});

describe( 'function numberIsNegative', () => {
    it( 'should numberIsNegative for negative value return true', () => {
        assert.equal( numberIsNegative(-5), true );
    });

    it( 'should numberIsNegative for positive value return false', () => {
        assert.equal( numberIsNegative(5), false );
    });

    it( 'should numberIsNegative for 0 return false', () => {
        assert.equal( numberIsNegative(0), false );
    });

    it( 'should numberIsNegative for obj return undefined', () => {
        assert.equal( numberIsPositive({}), undefined );
    });

    it( 'should numberIsNegative for array return undefined', () => {
        assert.equal( numberIsPositive([]), undefined );
    });

    it( 'should numberIsNegative for string return undefined', () => {
        assert.equal( numberIsPositive(''), undefined );
    });
});

