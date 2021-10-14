const { Calculator, capitalise, reverseString, analyse, CeasarCipher } = require('../src/scripts/index.js');

describe('capitalise', () => {

	test('capitalises first letter of a string', () => {

		expect(capitalise('first letter should be capitalised'))
            .toBe('First letter should be capitalised');

	});

});

describe('reverse', () => {

	test('reverses a given string', () => {

		expect(reverseString('reversed'))
            .toBe('desrever');

	});

});

describe('analyse', () => {

	test('returns an object with average, min, max and length', () => {

        // Arrange
        let array = [1,2,3,4,5];

        // Act
        let result = analyse(array);
        let expected = {
            average: 3,
            min: 1,
            max: 5,
            length: 5
        }

        // Assert
		expect(result).toEqual(expected);

	});

});

describe('calculator', () => {

    const calculator = new Calculator;

    test('add returns sum of arguments', () => {

        // Arrange

        // Act
        let result = calculator.add(1,1);

        // Assert
        expect(result).toBe(2);

    })

    test('subtract returns difference between arguments', () => {

        // Arrange

        // Act
        let result = calculator.subtract(2,1);

        // Assert
        expect(result).toBe(1);

    })

    test('divide returns quotient of arguments', () => {

        // Act
        let result = calculator.divide(10,5);

        // Assert
        expect(result).toBe(2);

    })

    test('mutiply returns product of arguments', () => {

        // Act
        let result = calculator.multiply(2,2);

        // Assert
        expect(result).toBe(4);

    })

})

describe('ceasar cipher', () => {

    test('constructor generates an alphabet dictionary of index : letter', () => {

        // Arrange
        let cipher = new CeasarCipher(1);

        // Act
        let indexLetter = cipher.indexLetter;

        // Assert
        expect(indexLetter.get(0)).toBe('a');
        expect(indexLetter.get(25)).toBe('z');

    })

    test('constructor generates an alphabet dictionary of letter : index', () => {

        // Arrange
        let cipher = new CeasarCipher(1);

        // Act
        let letterIndex = cipher.letterIndex;

        // Assert
        expect(letterIndex.get('a')).toBe(0);
        expect(letterIndex.get('z')).toBe(25);

    })
    
    test('enciphers a string based on provided integer key', () => {
        
        // Arrange
        let cipher = new CeasarCipher(1);

        // Act
        let enciphered = cipher.encipher('abcd');

        // Assert
        expect(enciphered).toMatch('bcde');

    })

    test('encipher wraps from z to a', () => {
        
        // Arrange
        let cipher = new CeasarCipher(1);

        // Act
        let enciphered = cipher.encipher('z');

        // Assert
        expect(enciphered).toMatch('a');

    })

    test('deciphers an enciphered key based on provided key', () => {

        // Arrange
        let cipher = new CeasarCipher(1);

        // Act
        let deciphered = cipher.decipher('bcde');

        // Assert
        expect(deciphered).toMatch('abcd');

    })

    test('decipher wraps from a to z', () => {
        
        // Arrange
        let cipher = new CeasarCipher(1);

        // Act
        let deciphered = cipher.decipher('a');

        // Assert
        expect(deciphered).toMatch('z');

    })

})
