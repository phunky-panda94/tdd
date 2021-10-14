class Calculator {

    add(a,b) {
        return a + b;
    }

    subtract(a,b) {
        return a - b;
    }

    divide(a,b) {
        return a / b;
    }

    multiply(a,b) {
        return a * b;
    }

}

class CeasarCipher {

    constructor(key) {
        this.key = key;

        let alphabet = 'abcdefghijklmnopqrstuvwxyz';

        // index : letter
        let indexLetter = new Map();
        for (let i = 0; i < alphabet.length; i++) {
            indexLetter.set(i,alphabet[i]);
        }
        this.indexLetter = indexLetter;

        // letter : index
        let letterIndex = new Map();
        for (let i = 0; i < alphabet.length; i++) {
            letterIndex.set(alphabet[i],i);
        }
        this.letterIndex = letterIndex;

        
    }

    encipher(string) {

        let result = '';
        let index;
        let letter;

        for (let i = 0; i < string.length; i++) {
            // get index of letter in map and add key
            index = this.letterIndex.get(string[i]) + this.key;
            // if index > 25, minus 26
            if (index > 25) {
                index -= 26;
            }
            // get letter of new index in map
            letter = this.indexLetter.get(index);

            // append to result string
            result += letter;
        }

        return result;

    }

    decipher(string) {

        let result = '';
        let index;
        let letter;

        for (let i = 0; i < string.length; i++) {
            // get index of letter in map and add key
            index = this.letterIndex.get(string[i]) - this.key;
            // if index < 0, add 26
            if (index < 0) {
                index += 26;
            }
            // get letter of new index in map
            letter = this.indexLetter.get(index);

            // append to result string
            result += letter;
        }

        return result;

    }

}

function capitalise(string) {

    // change first letter to upper case
    let capitalised = string.substring(0,1).toUpperCase() + string.substring(1);

    return capitalised;

}

function reverseString(string) {

    let reversed = ''

    // loop through string from back to front and add to reversed
    for (let i = 0; i < string.length; i++) {
        reversed += string[string.length - 1 - i];
    }

    return reversed;

}

function analyse(array) {

    let sum = 0;
    let min = array[0];
    let max = array[0];

    // return object with average, min, max and length of array
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        array[i] < min ? min = array[i] : min = min;
        array[i] > max ? max = array[i] : max = max;
    }

    let average = sum / array.length;
    let length = array.length;

    let result = {
        average: average,
        min: min,
        max: max,
        length: length
    }

    return result;

}

module.exports = { Calculator, capitalise, reverseString, analyse, CeasarCipher };

