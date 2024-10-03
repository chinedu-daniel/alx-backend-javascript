const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
    let calculateNumberStub;

    beforeEach(() => {
        if (Utils.calculateNumber.restore) {
            Utils.calculateNumber.restore();
        }
        if (console.log.restore) {
            console.log.restore();
        }

        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with type SUM, a = 100, and b = 20', () => {
        sendPaymentRequestToApi(100, 20);
        assert(calculateNumberStub.calledOnce);
        assert(calculateNumberStub.calledWith('SUM', 100, 20));
    });

    it('should log the correct message "The total is: 10"', () => {
        sendPaymentRequestToApi(100, 20);
        assert(consoleSpy.calledOnceWithExactly('The total is: 10'));
    });
});