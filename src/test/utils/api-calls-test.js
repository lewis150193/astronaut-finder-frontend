const expect = require('chai').expect;
const nock = require('nock');
const { getAstronautNames } = require('../../utils/api-calls');

describe('First test', () => {
    beforeEach(() => {
        nock('http://localhost:8090/astronauts')
            .get('/all/ordered')
            .reply(200,[]);
    });
    it('Should assert true to be true', () => {
        return getAstronautNames()
            .then(response => {
                expect(typeof response).to.equal('object');

            });
    });
});
