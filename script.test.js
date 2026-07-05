import { 
    capitalise,
    reverseString
} from './script';

test("Capitalises first letter", () => {
    expect(capitalise("samantha")).toBe("Samantha");
});

test("Reverses a string", () => {
    expect(reverseString("Samantha")).toBe("ahtnamaS")
})