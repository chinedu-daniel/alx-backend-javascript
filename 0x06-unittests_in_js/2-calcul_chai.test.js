const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the sum of rounded numbers', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
            expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
        });
    });

    // describe('SUBTRACT', function() {
    //     it('should return the subtraction of rounded numbers', function() {
    //       expect(calculateNumber('SUBTRACT', 4.6, 2.3)).to.equal(3);
    //       expect(calculateNumber('SUBTRACT', 1.4, 3.7)).to.equal(-3);
    //     });
    // });

    // describe('DIVIDE', function() {
    //     it('should return the division of rounded numbers', function() {
    //       expect(calculateNumber('DIVIDE', 9.5, 2.1)).to.equal(5);
    //     });
    
    //     it('should return "Error" when dividing by zero', function() {
    //       expect(calculateNumber('DIVIDE', 9.5, 0.2)).to.equal('Error');
    //     });
    // });
});