'use strict';

const expect          = require('chai').expect;
const getJsonBasename = require('../lib');

describe('get-json-basename', () => {
    it('is a function', () => {
        expect(getJsonBasename).to.be.a('function');
    });

    it('gets the basename of a JSON filepath without the extension', () => {
        let filepath = '/path/to/file.json';

        expect(getJsonBasename(filepath)).to.equal('file');
    });

    it('gets the basename of an extensionless filepath', () => {
        let filepath = '/dev/null';

        expect(getJsonBasename(filepath)).to.equal('null');
    });

    it('gets the basename of a non-JSON filepath with the extension', () => {
        let filepath = '/var/log/test.txt';

        expect(getJsonBasename(filepath)).to.equal('test.txt');
    });
});
