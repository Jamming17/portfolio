import DOMPurify from "dompurify";

export const sanitise = (input) => {
    if (typeof input !== "string") {
        console.error("Input was not of type string");
        return input;
    }
    const cleanInput = DOMPurify.sanitize(input);
    return cleanInput;
}