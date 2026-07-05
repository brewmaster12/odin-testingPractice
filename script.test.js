import { capitalise } from './script';

test("Capitalises first letter", () => {
    expect(capitalise("samantha")).toBe("Samantha");
});