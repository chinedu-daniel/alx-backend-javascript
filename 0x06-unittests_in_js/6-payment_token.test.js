const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with the correct object when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((result) => {
                expect(result).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch((err) => done(err));
    });

    it('should not resolve when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then((result) => {
                expect(result).to.be.undefined;
                done();
            })
            .catch((err) => done(err));
    });
});