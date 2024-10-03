const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the sum of rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', 2.5, 2.5), 6);
        });
    });

    describe('SUBTRACT', function() {
        it('should return the subtraction of rounded numbers', function() {
          assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 2.3), 3);
          assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
        });
    });

    describe('DIVIDE', function() {
        it('should return the division of rounded numbers', function() {
          assert.strictEqual(calculateNumber('DIVIDE', 9.5, 2.1), 5);
        });
    
        it('should return "Error" when dividing by zero', function() {
          assert.strictEqual(calculateNumber('DIVIDE', 9.5, 0.2), 'Error');
        });
    });
});