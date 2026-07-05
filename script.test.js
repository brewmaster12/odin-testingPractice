import { 
    capitalise,
    reverseString,
    calculator,
    caesarCipher,
    analyseArray
} from './script';

test("Capitalises first letter", () => {
    expect(capitalise("samantha")).toBe("Samantha");
});

test("Reverses a string", () => {
    expect(reverseString("Samantha")).toBe("ahtnamaS")
})

test("Calculate two ints", () => {
    expect(calculator.add(5, 7)).toBe(12);
    expect(calculator.subtract(5, 7)).toBe(-2);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.multiply(3, 6)).toBe(18);
})

test("Caesar cipher a string", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test("Analyse an array", () => {
    expect(analyseArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})