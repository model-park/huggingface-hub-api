import { expect } from 'chai';
import 'mocha';
import HuggingfaceHubService from '../src';

describe('Get Models', () => {
    it('should return the models', async () => {

        const hf = new HuggingfaceHubService();
        const actual = await hf.GetModels({ limit: 5 });
        expect(actual).to.have.own.property('data');
        expect(actual.data).to.be.an('array');
        expect(actual.data).to.have.lengthOf(5);

        expect(actual).to.have.own.property('total');
        expect(actual.total).to.be.a('number');

        expect(actual).to.have.own.property('nextUrl');
        expect(actual.nextUrl).to.be.a('string');
    });
});


