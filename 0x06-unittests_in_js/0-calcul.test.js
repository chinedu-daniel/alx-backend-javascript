const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4 when inputs are 1.4 and 3.3', function() {
        assert.strictEqual(calculateNumber(1.4, 3.3), 4);
    });

    it('should return 9 when inputs are 4.6 and 4.4', function() {
        assert.strictEqual(calculateNumber(4.6, 4.4), 9);
    });

    it('should return 6 when inputs are 2.5 and 2.5', function() {
        assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    });

    it('should return 0 when inputs are 1.4 and -1.4', function() {
        assert.strictEqual(calculateNumber(1.4, -1.4), 0);
    });
})