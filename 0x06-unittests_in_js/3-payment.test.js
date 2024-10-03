const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with correct parameters', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        assert(calculateNumberSpy.calledOnce);
        assert(calculateNumberSpy.calledWith('SUM', 100, 20));
        calculateNumberSpy.restore();
    });
});