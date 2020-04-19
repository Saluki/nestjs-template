
import { IdentifierPipe } from '../flow';

describe('Identifier pipe', () => {

    const data = {
        VALID_IDENTIFIER: '42',
        LOWEST_IDENTIFIER: '0',
        UNDERFLOW_IDENTIFIER: '-20',
        OVERFLOW_IDENTIFIER: '11111111112222222222333333333344444444445555555555666666666677777'
    };

    const pipe = new IdentifierPipe();

    it('Should validate number identifier', () => {

        const result = pipe.transform(data.VALID_IDENTIFIER, { type: 'param' });
        expect(result).toEqual(data.VALID_IDENTIFIER);

    });

    it('Should validate string identifier', () => {

        const result = pipe.transform(`${data.VALID_IDENTIFIER}`, { type: 'body' });
        expect(result).toEqual(`${data.VALID_IDENTIFIER}`);

    });

    it('Should validate lowest identifier', () => {

        const result = pipe.transform(`${data.LOWEST_IDENTIFIER}`, { type: 'query' });
        expect(result).toEqual(`${data.LOWEST_IDENTIFIER}`);

    });

    it('Should properly reject values larger than 64 bytes', () => {

        expect(() => {
            pipe.transform(data.OVERFLOW_IDENTIFIER, { type: 'param' });
        }).toThrow('validation failed');

    });

    it('Should properly reject values containing other characters', () => {

        expect(() => {
            pipe.transform(`pre${data.VALID_IDENTIFIER}post`, { type: 'param' });
        }).toThrow('validation failed');

    });

    it('Should properly reject null values', () => {

        expect(() => {
            pipe.transform(null, { type: 'param' });
        }).toThrow('validation failed');

    });

    it('Should properly reject undefined values', () => {

        expect(() => {
            pipe.transform(undefined, { type: 'query' });
        }).toThrow('validation failed');

    });

    it('Should properly reject object values', () => {

        expect(() => {
            pipe.transform({ hello: 'world' }, { type: 'param' });
        }).toThrow('validation failed');

    });

});
