function capitalise(string) {
    return string.charAt(0).toUpperCase()
    + string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    }
}

function caesarCipher(string, int) {
    const chars = string.split("");
    const cipher = chars.map(char => {
        const code = char.charCodeAt(0);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + int) % 26) + 65);
        }

        // Lowercase letters
        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + int) % 26) + 97);
        }

        // Leave non-letter characters unchanged
        return char;
    })
    return cipher.join("");
}

function analyseArray(arr) {
    const average = arr.reduce((sum, element) => sum + element, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {
        average,
        min,
        max,
        length
    }
}

export {
    capitalise,
    reverseString,
    calculator,
    caesarCipher,
    analyseArray
}